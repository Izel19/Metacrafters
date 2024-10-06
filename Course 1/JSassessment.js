/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftContainer = [];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nameNFT, rarityRate, supply, dateOfCreation, source) {
    let NFTclass = {
        "nameNFT" : nameNFT,
        "rarityRate" : rarityRate,
        "supply" : supply,
        "dateOfCreation" : dateOfCreation,
        "source": source
    }
    nftContainer.push(NFTclass);
    console.log("Processing...")
    console.log("Item Added: " + nameNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (i = 0; i < nftContainer.length; i++){
        console.log("-----------------------------------------------------------");
        console.log("Name of NFT: " + nftContainer[i].nameNFT);
        console.log("Rate of Rarity of " + nftContainer[i].nameNFT + " NFT: " + nftContainer[i].rarityRate);
        console.log("supply of " + nftContainer[i].nameNFT + " NFT: " + nftContainer[i].supply);
        console.log("Date of Creation of " + nftContainer[i].nameNFT + " NFT: " + nftContainer[i].dateOfCreation);
        console.log("source of " + nftContainer[i].nameNFT + " NFT: " + nftContainer[i].source);
        console.log("-----------------------------------------------------------");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("-----------------------------------------------------------");
    console.log("Number of Current NFTs Present: " + nftContainer.length)
    console.log("-----------------------------------------------------------");

}

// call your functions below this line

mintNFT("CharlesLeclerc", "2%", 4, "June 21, 2024", "Ferrari");
mintNFT("CarlosSainz", "4%", 10, "July 26, 2024", "Ferrari");
mintNFT("LewisHamilton", "0.5%", 1, "May 2, 2024", "Mercedes");
mintNFT("GeorgeRussell", "10%", 18, "June 16, 2024", "Mercedes");
mintNFT("MaxVerstappen", "0.1%", 1, "August 30, 2024", "RedBull");



listNFTs()
getTotalSupply()
