import React from "react";
import Header from "./Header";
import Carreer from '../../About/jsx/Carreer';
import Join from "../../About/jsx/Join";
import HomeBanner7 from "./HomeBanner7";
import Footer from "./Footer";

import "../css/CareersPageStyles.css"
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