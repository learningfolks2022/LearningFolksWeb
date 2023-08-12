import React from "react";
import Header from "../../components/user/jsx/Header";
import Carreer from '../../components/About/jsx/Carreer';
import Join from "../../components/About/jsx/Join";
import Footer from "../../components/user/jsx/Footer";

const CareersPage = () => {
    return ( 
        <div>
            <Header/>
            <Carreer/>
            <Join/>
            <Footer/>
        </div>
     );
}
 
export default CareersPage;