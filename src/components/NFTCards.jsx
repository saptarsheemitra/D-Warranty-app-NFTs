import React from "react";
import "./css/nftCards.css";

const NFTCard = ({ nft }) => {
    let buydate = nft.meta.attributes[2].value;
    buydate = buydate.slice(0,10);
    let warrantyvalid = nft.meta.attributes[3].value;
    warrantyvalid = warrantyvalid.slice(0,10);

  return (
    <>
      <div className="card-main-container">
        <div id="" className="card-container">
          <div className="card-wrapper">
            <div className="overviewInfo">
              <img
                src="https://api.rarible.org/content/embedded/797af92ea37802578a08e1bb88b1bf389855ba2318029cb75908c405902f8b99"
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
                    <p>{buydate}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon" />
                  <div className="featureText">
                    <p>
                      <strong>Warranty Till</strong>
                    </p>
                    <p>{warrantyvalid}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="overviewInfo">
              <img
                src="https://api.rarible.org/content/embedded/797af92ea37802578a08e1bb88b1bf389855ba2318029cb75908c405902f8b99"
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
                    <p>{buydate}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon" />
                  <div className="featureText">
                    <p>
                      <strong>Warranty Till</strong>
                    </p>
                    <p>{warrantyvalid}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NFTCard;
