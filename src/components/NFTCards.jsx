import React from "react";

const NFTCard = ({nft}) => {
    return(
        <>
        <div>
          {nft.meta.name}
          {/* {nft.collection}  */}
          {nft.meta.attributes[0].value}
        </div>
        </>
    )
}

export default NFTCard;