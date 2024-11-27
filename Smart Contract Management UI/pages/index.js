import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [isSubscribed, setIsSubscribed] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const subscriptionABI = atm_abi.abi;

  // Initialize Ethereum Wallet
  const getWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      setEthWallet(window.ethereum);
    } else {
      alert("MetaMask is required to use this application. Please install MetaMask.");
    }
  };

  // Handle Account Connection
  const handleAccount = (accounts) => {
    if (accounts && accounts.length > 0) {
      console.log("Connected account:", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account connected");
    }
  };

  // Connect to MetaMask
  const connectWallet = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect.");
      return;
    }
    try {
      const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
      handleAccount(accounts);
      initializeContract(); // Initialize contract after wallet connection
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Initialize the Smart Contract
  const initializeContract = () => {
    if (!ethWallet) {
      console.error("Ethereum wallet not initialized.");
      return;
    }
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const streamingContract = new ethers.Contract(contractAddress, subscriptionABI, signer);
    setContract(streamingContract);
  };

  // Check Subscription Status
  const checkSubscriptionStatus = async () => {
    if (contract && account) {
      try {
        const status = await contract.isSubscribed(account);
        setIsSubscribed(status);
      } catch (error) {
        console.error("Error checking subscription status:", error);
      }
    }
  };

  // Subscribe to the Service
  const subscribe = async () => {
    if (contract) {
      try {
        const tx = await contract.subscribe({ value: ethers.utils.parseEther("0.1") });
        await tx.wait();
        checkSubscriptionStatus();
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    }
  };

  // Cancel Subscription
  const cancelSubscription = async () => {
    if (contract) {
      try {
        const tx = await contract.cancelSubscription();
        await tx.wait();
        checkSubscriptionStatus();
      } catch (error) {
        console.error("Error cancelling subscription:", error);
      }
    }
  };

  // Initialize User Interface
  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this subscription service.</p>;
    }

    if (!account) {
      return <button onClick={connectWallet}>Connect MetaMask Wallet</button>;
    }

    if (isSubscribed === undefined) {
      checkSubscriptionStatus();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>
          Subscription Status:{" "}
          {isSubscribed ? "Subscribed ✅" : "Not Subscribed ❌"}
        </p>
        {isSubscribed ? (
          <button onClick={cancelSubscription}>Cancel Subscription</button>
        ) : (
          <button onClick={subscribe}>Subscribe for 0.1 ETH</button>
        )}
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Streaming Site Subscription</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
}