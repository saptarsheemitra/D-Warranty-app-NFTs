import { React } from "react";

const SellerLogin = () => {
  const connectWallet = () => {
    
  };
  return (
    <>
      <div className="main-container">
        <div className="wrapper">
          <div className="form">
            <div className="title">Welcome!</div>
            <div className="subtitle">Enter User Details</div>

            <button type="text" className="submit" onClick={connectWallet}>
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerLogin;
