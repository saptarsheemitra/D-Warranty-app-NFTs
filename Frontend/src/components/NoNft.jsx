import React from "react";
import "./css/noNFT.css";
function Home(){
    window.location.pathname="/";
}

function NoNft() {
  return (
    <div className="no-nft-container">
       <div id="" className="card-container">
          <div className="card-wrapper">
            
            <div className="productSpecifications">
              <h1>Oops</h1>
              <p className="space-nonft">
                Seems like you dont have any NFT Warranty.
              </p>
              <button className="btn" onClick={Home}> Go to home page </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default NoNft;
