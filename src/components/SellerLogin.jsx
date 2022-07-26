import { React } from "react";

const username = "admin";
const password = "admin";

const SellerLogin = () => {
    console.log(username);
    console.log(password);
  return (
    <>
      <div className="main-container">
        <div className="wrapper">
          <div className="form">
            <div className="title">Welcome!</div>
            <div className="subtitle">Enter User Details</div>
            <div className="input-container ic1">
              <input
                id="uname"
                className="input"
                type="text"
                placeholder=" "
                //   onChange={customerID}
                required
              />
              <div className="cut" />
              <label htmlFor="uname" className="placeholder">
                Username
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="pword"
                className="input"
                type="password"
                placeholder=" "
                //   onChange={productname}
                required
              />
              <div className="cut" />
              <label htmlFor="pword" className="placeholder">
                {" "}
                Password{" "}
              </label>
            </div>

            <button type="text" className="submit">
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerLogin;
