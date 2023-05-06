import React from 'react'
import "../css/CarreerStyle.css";
// import { useNavigate, Link} from "react-router-dom";

const Carreer = () => {

  // const navigate  = useNavigate() ;

  return (
    <>
      <div className='carreer_section' id="career">
        <h1>Career With Us</h1>
      </div>
      <div className='card_container'>
        <div className='card_left'>
          <img src="https://blog.payrollbozz.com/wp-content/uploads/sites/28/2016/08/0o1a5622-1761.jpg" alt='carreer_image' />
        </div>
        <div className='card_right'>
            <p>Students having sound knowledge in any field, willing to showcase the same to the world, or People interested in working as an intern and entering in our organization, or People willing to enter for campus ambassador publicity. Fill out the form below and don't forget to upload resume separately.</p>
          <div className='apply_btn'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSeJNyHSTlfVYgwgi5GJ-FOUmxcSpdM0pSM3Mqvn6datQ2cY6Q/viewform' target='_blank' rel="noreferrer"><button type="button">Apply</button></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Carreer