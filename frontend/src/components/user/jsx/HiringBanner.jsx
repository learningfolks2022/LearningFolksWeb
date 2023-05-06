import React from 'react';
import "../css/HiringBanner.css";
import { useNavigate } from "react-router-dom";
import HiringBannerImage from "../../../img/banner/HiringBannerImage.jpeg";
import {IoIosArrowForward} from 'react-icons/io';

const HiringBanner = () => {
    const navigate  = useNavigate() ;

  return (
      <div className='main_container_hiring_banner'>
        <div className='hiring_banner_image_container'>
            <img className='hiring_banner_image' src={HiringBannerImage} alt = " "/>
        </div>
        <div className='top_section_hiring_banner3'>
          <div className='top_section_hiring_banner3_content'>
            <div className='top_section_hiring_banner3_header'>
              <h2>WE ARE HIRING<span className='astrisk_hiring'>*</span></h2>
            </div>
            <div className='top_section_hiring_banner3_desc'>
              <p>Learning made simple with folks among us Learn smarter, not harder with the help of folks among us and unlock your full learning potential with the support of your peers and mentors. Join the community of learners and make learning simple and enjoyable with folks among us.</p>
            </div>
          </div>
            <div className='apply_home_button_container'>
            <button className="apply_home_page_btn" onClick={() => navigate("/about#career")}>Career <IoIosArrowForward className='career_arrow_icon'/></button>
        </div>
        </div>
      </div>
  )
}

export default HiringBanner ;
