import { ethers } from "ethers";
import { React, useState } from "react";
import LoadingOverlay from 'react-loading-overlay-ts';
import warrantyCard from "../utils/WarrantyCard.json";
import "./css/sellerMain.css";
const CONTRACT_ADDRESS = "0xFb2aC437ca9d3efB217a48de4A0455d668D793aB";

const SellerMain = () => {
  const [pID, setPID] = useState("");
  const [productName, setProductName] = useState("");
  const [productModel, setProductModel] = useState("");
  const [date, setDate] = useState();
  const [period, setPeriod] = useState();
  const [productDescription, setProductDescription] = useState("");
  const [loading,setLoading] = useState(false);


  function productID(e) {
      setPID(e.target.value);
  }
  function productname(e) {
    setProductName(e.target.value);
  }
  function productmodel(e) {
    setProductModel(e.target.value);
  }
  function purchasedate(e) {
    let tempDate = Math.floor(new Date(e.target.value).getTime()/1000);
    setDate(tempDate);
    console.log(tempDate);
  }
  function wperiod(e) {
    let tempP = Number(e.target.value)
    tempP = date + (tempP * 30*24*60*60);
    setPeriod(tempP);
  }

  function pDescription(e) {
    setProductDescription(e.target.value);
  }

  function loadingHandler(){
    setLoading(true);
  }

  function getTheMetaData() {
    // console.log(period);
    console.log(date);
    let tempPeriod = date + (period * 30*24*60*60);
    console.log(tempPeriod);
    console.log("jhj " +period);
    return (
      '[{"trait_type": "Product ID","value": "' +
      pID +
      '"},{"trait_type": "Serial","value": "' +
      productModel +
      '"},{"display_type": "date","trait_type": "Created","value": "' +
      date +
      '"},{"display_type": "date","trait_type": "Warranty Till","value": "' +
      period +
      '"}]'
    );
  }

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
          // alert(
          //   `Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
          // );
          window.location.href=`https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`;
          // window.open(`https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`);
        });

        console.log("Setup event listener!");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          warrantyCard.abi,
          signer
        );
        const metaData = getTheMetaData();
        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.makeAProductNFT(
          productName,
          metaData,
          productDescription
        );

        console.log("Mining...please wait.");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function mintnft() {
    if (pID == "") {
      alert("Please enter customer id");
    } else if (productName == "") {
      alert("Please enter product name");
    } else if (productModel == "") {
      alert("Please enter product model no.");
    } else if (date == "") {
      alert("Please enter date of purchase");
    } else if (period == "") {
      alert("Please enter warranty period");
    } else {
      setupEventListener();
      askContractToMintNft()
      loadingHandler()
    }
  }

  return (
    <LoadingOverlay
  active={loading}
  spinner
  text='Loading your content...'
  >
      <div className="main-container">
        <div className="swrapper">
          {/* <div className="form"> */}
            <div className="title">Welcome!</div>
            <div className="subtitle">Enter Product Details</div>
            <div className="input-container ic1">
              <input
                id="cusid"
                className="input"
                type="number"
                placeholder=" "
                onChange={productID}
                required
              />
              <div className="cut" />
              <label htmlFor="cusid" className="placeholder">
                Product ID
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="productname"
                className="input"
                type="text"
                placeholder=" "
                onChange={productname}
                required
              />
              <div className="cut" />
              <label htmlFor="productname" className="placeholder">
                {" "}
                Product Name{" "}
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="productmodel"
                className="input"
                type="text"
                placeholder=" "
                onChange={productmodel}
                required
              />
              <div className="cut" />
              <label htmlFor="productmodel" className="placeholder">
                {" "}
                Product Model{" "}
              </label>
            </div>
            <div className="input-container ic2">
              <input
                type="date"
                id="date"
                className="input"
                onChange={purchasedate}
                required
              />
              <div className="cut" />
              <label htmlFor="date" className="placeholder">
                {" "}
                Date of purchase{" "}
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="period"
                className="input"
                type="number"
                placeholder=" "
                onChange={wperiod}
                required
              />
              <div className="cut" />
              <label htmlFor="period" className="placeholder">
                Warranty Period
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="dec"
                className="input"
                type="textarea"
                placeholder=" "
                onChange={pDescription}
                required
              />
              <div className="cut" />
              <label htmlFor="dec" className="placeholder">
              Description
              </label>
            </div>
            <button type="text" className="submit" onClick={mintnft}>
              Create NFT
            </button>
          </div>
        </div>
      {/* </div> */}
      </LoadingOverlay>
  );
};

export default SellerMain;
