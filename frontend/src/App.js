import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import EmailVerify from "./pages/user/EmailVerify";
// import ForgotPassword from "./pages/user/ForgotPassword";
import Home from "./pages/user/Home";
// import Login from "./pages/user/Login";
// import OTPVerify from "./pages/user/OTPVerify";
// import SignUp from "./pages/user/SignUp";
import About from "./pages/About/About" ;
import Error404 from "./pages/user/Error404";
import ComingSoon from "./pages/user/ComingSoon";
const App = () => {

  return (  
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="/login" element={<Login />} />       */}
        {/* <Route exact path="/emailverify/:type" element={<EmailVerify />} />   */}
        {/* <Route exact path="/otpverify/:email/:type" element={<OTPVerify />} />       */}
        {/* <Route exact path="/forgotpassword" element={<ForgotPassword />} />                                                               */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/comingsoon" element={<ComingSoon />} />                                                              
      </Routes>
    </BrowserRouter>
  );
};

export default App;
