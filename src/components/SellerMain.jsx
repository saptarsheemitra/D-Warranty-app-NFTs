import { React, useState } from "react";
import "./css/sellerMain.css";

const SellerMain = () => {
  const [pID, setPID] = useState("");
  const [productName, setProductName] = useState("");
  const [productModel, setProductModel] = useState("");
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("");

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
    setDate(e.target.value);
  }
  function wperiod(e) {
    setPeriod(e.target.value);
  }

  function show() {
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
      console.log(pID);
      console.log(productName);
      console.log(productModel);
      console.log(date);
      console.log(period);
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
            <button type="text" className="submit" onClick={show}>
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerMain;
