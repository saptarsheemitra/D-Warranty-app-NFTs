import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { React, useState } from "react";
import Home from "./components/Home";
import SellerMain from "./components/SellerMain";
import SellerLogin from "./components/SellerLogin";
import CustomerLogin from "./components/CustomerLogin";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="seller/login" element={<SellerLogin />} />
          <Route path="seller/dashboard" element={<SellerMain />} />
          <Route path="customer/login" element={<CustomerLogin />} />
         </Routes>
       </Router>
    // <Home/>
    // <SellerMain/>
    // <SellerLogin/>
  );
}

export default App;
