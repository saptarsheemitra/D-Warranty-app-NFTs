import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { React, useState } from "react";
import Home from "./components/Home";
import SellerMain from "./components/SellerMain";
import SellerLogin from "./components/SellerLogin";
import CustomerLogin from "./components/CustomerLogin";
import CustomerMain from "./components/CustomerMain";


function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="seller/login" element={<SellerLogin />} />
          <Route path="seller/dashboard" element={<SellerMain />} />
          <Route path="customer/login" element={<CustomerLogin />} />
          <Route path="customer/dashboard" element={<CustomerMain />} />
         </Routes>
       </Router>
    // <Home/>
    // <SellerMain/>
    // <SellerLogin/>
  );
}

export default App;
