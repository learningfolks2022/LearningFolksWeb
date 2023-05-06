import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import "../css/HomeBanner3Styles.css";
import { FaFacebookSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HomeBanner3 = () => {
  return (
    <div>
      <div className='main_container_homebanner3'>
        <div className='top_section_homebanner3'>
            <h2>Join Our Community</h2>
            <p>With exposure, networking and realisation
support, we help each student work in the
right direction based on their abilities. Being a
part of the student community, we know their
needs better than anyone else.</p>
        </div>

        <div className='bottom_section_homebanner3'>
            <a href='https://www.linkedin.com/company/learning-folks/' target="_blank" rel="noreferrer" ><BsLinkedin className='icon1_homebanner3' /></a>

            <a href='https://www.youtube.com/@learningfolks8635' target="_blank" rel="noreferrer"><FaYoutubeSquare className='icon2_homebanner3' /></a>

            <a href='https://chat.whatsapp.com/CsVKbuGcheBCOwlSD6SvVk' target="_blank" rel="noreferrer"><FaWhatsappSquare className='icon3_homebanner3' /></a>

            <a href='https://www.instagram.com/learningfolks/' target="_blank" rel="noreferrer"><AiFillInstagram className='icon4_homebanner3' /></a>

            <a href='https://www.facebook.com/learningfolks2022' target="_blank" rel="noreferrer"><FaFacebookSquare className='icon5_homebanner3' /></a>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner3
