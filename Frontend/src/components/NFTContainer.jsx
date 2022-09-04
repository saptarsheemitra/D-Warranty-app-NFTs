import React from "react";
import NFTCard from "./NFTCards";

const NFTContainer = ({nfts}) => {
    return(
        <>
        
            {nfts.map((nft,index) => {
                return <NFTCard nft={nft} key={index}/>
            })}
       
        </>
    )
}

export default NFTContainer;