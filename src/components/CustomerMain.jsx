import { React,useEffect,useState } from "react";
import "./css/home.css";
import NFTContainer from "./NFTContainer";

const CustomerMain = () => {
  var temp = []

  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts,setNfts] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !==`undefined`){
      const account = await window.ethereum.request({method: `eth_requestAccounts`});
      setWalletAddress(account[0])
      getNFTData(); 
    }
  }
 
  const getNFTData = async () => {
    if(!walletAddress) return;
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0xbc04473fa2Dfc319F20efba11992B6CbE409Ad05`)
    const data = await response.json();
    temp = data.items
    setNfts(temp);
  }

  useEffect(() => {
    connectWallet()
  }, [walletAddress]);


  console.log(nfts)
  return (
    <>
      {/* <div className="main-container"> */}

            <NFTContainer nfts={nfts} />

      {/* </div> */}
    </>
  );
}

export default CustomerMain;
