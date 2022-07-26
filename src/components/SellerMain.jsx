import { React, useState } from "react";
import "./css/sellerMain.css";
import { ethers } from "ethers";
import warrantyCard from "../utils/WarrantyCard.json";
const CONTRACT_ADDRESS = "0x829fa1fcb8fdd9a5d7ae1fb0e1ea20eb10c8a743";

const SellerMain = () => {
  const [pID, setPID] = useState("");
  const [productName, setProductName] = useState("");
  const [productModel, setProductModel] = useState("");
  const [date, setDate] = useState();
  const [period, setPeriod] = useState();
  const [productDescription, setProductDescription] = useState("");

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
  
      askContractToMintNft()
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="wrapper">
          <div className="form">
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
            <button type="text" className="submit" onClick={mintnft}>
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerMain;
