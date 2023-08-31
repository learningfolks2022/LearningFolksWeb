import React from "react";
import Footer from "../../components/user/jsx/Footer";
import Header from "../../components/user/jsx/Header";
import HomeBanner1 from "../../components/user/jsx/HomeBanner1";
import AboutBanner2 from "../../components/About/jsx/AboutBanner2";
// import HomeBanner2 from '../../components/user/jsx/HomeBanner2'
import Community from '../../components/About/jsx/Community';
import HomeBanner3 from "../../components/user/jsx/HomeBanner3";
// import HomeBanner4 from "../../components/user/jsx/HomeBanner4";
import HomeBanner5 from "../../components/user/jsx/HomeBanner5";
// import HomeBanner6 from "../../components/user/jsx/HomeBanner6";
// import HomeBanner7 from "../../components/user/jsx/HomeBanner7";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <HomeBanner1 />
      </div>
      <AboutBanner2 />
      {/* <HomeBanner2 /> */}
      <HomeBanner3 />
      <Community />
      {/* <HomeBanner4 /> */}
      <HomeBanner5 />
      {/* <HomeBanner6 /> */}
      {/* <HomeBanner7 /> */}
      <Footer />
    </div>
  );
};

export default Home;
