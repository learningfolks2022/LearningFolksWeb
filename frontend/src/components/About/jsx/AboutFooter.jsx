import React from 'react'
import "../css/AboutFooterStyles.css" ;
import {BsWhatsapp} from "react-icons/bs" ;
import {FaInstagram} from "react-icons/fa" ;
import {IoLogoLinkedin } from "react-icons/io" ;
import {AiOutlineYoutube} from "react-icons/ai" ;
import {BsDiscord} from "react-icons/bs" ;
import {SiGmail} from "react-icons/si" ;
function AboutFooter() {

  return (
    <>
    <div className='footer_heading'>
        <h1>Contact Us & Collaborate</h1>
    </div>
    <div className="about_footer_section">
    <a className="footer_link" href="https://www.instagram.com/learningfolks/" target="_blank" rel="noreferrer">
      <div className='icon'>
        <FaInstagram/>
        <p className='icon_title'>Join us at Instagram</p>
       </div>
    </a> 
    <a className="footer_link" href="https://www.linkedin.com/company/learning-folks/" target="_blank" rel="noreferrer">
    <div className='icon'>
        <IoLogoLinkedin/>
        <p className='icon_title'>Connect via Linkedin</p>
       </div>
    </a>
      <a className="footer_link" href="https://discord.gg/upB73EJpxs" target="_blank" rel="noreferrer">
       <div className='icon'>
        <BsDiscord/>
        <p className='icon_title'>Join our Discord Channel</p>
       </div>
      </a>
       <a className="footer_link" href="https://www.youtube.com/@learningfolks8635" target="_blank" rel="noreferrer">
       <div className='icon'>
        <AiOutlineYoutube/>
        <p className='icon_title'>Join us at Youtube</p>
       </div>
       </a>
       <a className="footer_link" href="https://chat.whatsapp.com/CsVKbuGcheBCOwlSD6SvVk" target="_blank" rel="noreferrer">
       <div className='icon'>
        <BsWhatsapp/>
        <p className='icon_title'>Join our Whatsapp Community</p>
       </div>
       </a>
      <a className="footer_link" href="mailto:learningfolks2022@gmail.com" target="_self">
      <div className='icon'>
        <SiGmail/>
        <p className='icon_title'>Contact us via mail</p>
       </div>
      </a>
    </div>
    </>
  )
}

export default AboutFooter