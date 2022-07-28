import { React } from "react";
import { useEffect, useState } from "react";
// import "./styles/main.css";
import { ethers } from "ethers";
import warrantyCard from "../utils/WarrantyCard.json";
// import SellerMain from "./SellerMain";
const CONTRACT_ADDRESS = "0x68cBeD2FAAe2B84119b3ce52844C37532651f5CF";


const CustomerLogin = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      setupEventListener();
    } else {
      console.log("No authorized account found");
    }
  };

  /*
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
        Fancy method to request access to account.
      */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      /*
        Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      setupEventListener();
    } catch (error) {
      console.log(error);
    }
  };

  // Setup our listener.
  const setupEventListener = async () => {
    // Most of this looks the same as our function askContractToMintNft
    try {
      const { ethereum } = window;

      if (ethereum) {
        // Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          warrantyCard.abi,
          signer
        );

        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
        connectedContract.on("NewProductNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber());
          alert(
            `Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
          );
        });

        console.log("Setup event listener!");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  // Render Methods

  /*
  1. Design it as you wish.
  2. Just have the button which will call the method connectWallet on click.
  */

  const renderNotConnectedContainer = () => (
    <>
      <div className="main-container">
        <div className="wrapper">
          <div className="form">
            <div className="title">Welcome!</div>
            <div className="subtitle">Please connect your blockchain wallet</div>

            <button type="text" className="submit" onClick={connectWallet}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );

  /*
  1. Create the from here.
  2. Get all data from frontend from to the variables declared on line 6,7,8,9,10,11.
  3. Make all the form fields required and then the button.
  4. The button will call the method askContractToMintNft on click.
  */
  const renderConnectedContainer = () => (
    window.location.pathname="/customer/dashboard"
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  },[]);

  /*
   * Added a conditional render! We don't want to show Connect to Wallet if we're already connected :).
   */
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          {currentAccount === ""
            ? renderNotConnectedContainer()
            : renderConnectedContainer()}
        </div>
      </div>
    </div>
  );
  
};

export default CustomerLogin;
