import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [isSubscribed, setIsSubscribed] = useState(undefined);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

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
      setAccount(accounts[0]);
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
    const streamingContract = new ethers.Contract(contractAddress, subscriptionABI.abi, signer);
    setContract(streamingContract);
  };

  // Fetch Subscription Plans
  const fetchPlans = async () => {
    if (contract) {
      try {
        const plans = [];
        for (let i = 1; i <= 3; i++) {
          const plan = await contract.plans(i);
          if (plan.active) {
            plans.push({ id: i, price: ethers.utils.formatEther(plan.price), duration: plan.duration });
          }
        }
        setSubscriptionPlans(plans);
      } catch (error) {
        console.error("Error fetching subscription plans:", error);
      }
    }
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

  // Subscribe to a Plan
  const subscribe = async () => {
    if (contract && selectedPlan) {
      try {
        const plan = subscriptionPlans.find((p) => p.id === selectedPlan);
        const tx = await contract.subscribe(selectedPlan, {
          value: ethers.utils.parseEther(plan.price),
        });
        await tx.wait();
        checkSubscriptionStatus();
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    } else {
      alert("Please select a subscription plan.");
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
          <p>You are already subscribed!</p>
        ) : (
          <div>
            <h3>Select a Subscription Plan:</h3>
            <select onChange={(e) => setSelectedPlan(Number(e.target.value))}>
              <option value="">Select Plan</option>
              {subscriptionPlans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  Plan {plan.id}: {plan.price} ETH for {plan.duration} seconds
                </option>
              ))}
            </select>
            <button onClick={subscribe}>Subscribe</button>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (contract) {
      fetchPlans();
    }
  }, [contract]);

  return (
    <main className="container">
      <header>
        <h1>Subscription Service</h1>
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
        select {
          margin: 10px;
          padding: 10px;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
}
