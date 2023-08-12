import React from "react";
import Header from "../../components/user/jsx/Header";
import Carreer from '../../components/About/jsx/Carreer';
import Join from "../../components/About/jsx/Join";
import HomeBanner7 from "../../components/user/jsx/HomeBanner7";
import Footer from "../../components/user/jsx/Footer";

const CareersPage = () => {
    return ( 
        <div>
            <Header/>
            <Carreer/>
            <Join/>
            <HomeBanner7/>
            <Footer/>
        </div>
     );
}
 
export default CareersPage;