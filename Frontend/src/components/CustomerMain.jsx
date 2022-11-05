import { React,useEffect,useState } from "react";
import "./css/home.css";
import NFTContainer from "./NFTContainer";
import NoNft from "./NoNft";
import "./css/nftCards.css";

const CustomerMain = () => {
  var temp = []

  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts,setNfts] = useState([]);
  var isNFT = false

  const connectWallet = async () => {
    if (typeof window.ethereum !==`undefined`){
      const account = await window.ethereum.request({method: `eth_requestAccounts`});
      setWalletAddress(account[0])
      getNFTData(); 
    }
  }
 
  const getNFTData = async () => {
    if (!walletAddress) return;
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)
    const data = await response.json();
    temp = data.items
    setNfts(temp);
    console.log(nfts.length)
  }
  
  console.log(nfts);
  console.log(nfts.length)
     if (nfts.length>0){
      isNFT = true
    }
  console.log(isNFT)


  useEffect(() => {
    connectWallet()
  }, [walletAddress]);


  return (
    <>
      {/* <div className="card-main-container"> */}
      {/* <NFTContainer nfts={nfts} /> */}
      {/* <NoNft/> */}
      {isNFT==true ? (
            
            <NFTContainer nfts={nfts} />
          ) : (
            <NoNft/>
          )}

            

      {/* </div> */}
    </>
  );
}

export default CustomerMain;
