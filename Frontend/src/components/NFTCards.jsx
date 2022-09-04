import React from "react";
import "./css/nftCards.css";

const NFTCard = ({ nft }) => {
  function OpenSeaRedirect(){
    let contract = nft.contract;
    contract = contract.slice(8)
    let tokenid = nft.tokenId;
    let redirectadd =`https://opensea.io/assets/matic/${contract}/${tokenid}`
    window.open(redirectadd)
  }

  return (
    <>
      {/* <div className="card-main-container"> */}
        <div id="" className="card-container">
          <div className="card-wrapper">
            <div className="overviewInfo">
              <img
                src={nft.meta.content[0].url}
                alt=""
              />
            </div>
            <div className="productSpecifications">
              <h1>{nft.meta.name}</h1>
              <p>
                {nft.meta.description}
              </p>
              <div className="productFeatures">
                <div className="feature">
                  <div className="featureIcon" />
                  <div className="featureText">
                    <p>
                      <strong>Product ID</strong>
                    </p>
                    <p>{nft.meta.attributes[0].value}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon" />
                  <div className="featureText">
                    <p>
                      <strong>Serial no</strong>
                    </p>
                    <p>{nft.meta.attributes[1].value}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon" />
                  <div className="featureText">
                    <p>
                      <strong>Buy Date</strong>
                    </p>
                    <p>{ nft.meta.attributes[2].value.slice(0, 10)}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon" />
                  <div className="featureText">
                    <p>
                      <strong>Warranty Till</strong>
                    </p>
                    <p>{nft.meta.attributes[3].value.slice(0, 10)}</p>
                  </div>
                </div>
              </div>

              <button className="btn" onClick={OpenSeaRedirect}> OpenSea.io </button>
            </div>
          </div>
        </div>
      {/* </div> */}

    </>
  );
};

export default NFTCard;
