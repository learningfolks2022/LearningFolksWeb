import React from 'react';
import "../css/HomeBanner1Styles.css";
// import Globe from "../../../img/banner/globe.png";
import maingif from "../../../img/banner/mainl.gif"
import plans from "../../../img/banner/plans1.jpg";

const HomeBanner1 = () => {
  return (
    <div>
      <div className='main_container_homebanner1'>
        <div className='top_section_homebanner1'>
          <h2 id='fade-in-left'>“Learning made simple with Folks among us” <span></span></h2>
          <p id='fade-in-right'>Learn smarter, not harder with the help of folks among us and unlock your full learning potential with the support of your peers and mentors. Join the community of learners and make learning simple and enjoyable with folks among us.</p>
        </div>

        <div className='bottom_section_homebanner1' id='fade-in-left'>
          <img src={maingif} alt='banner' />
        </div>
        <div>
        {/* HIRING BANNER WAS HERE */}
        </div>
        {/* <div className='ctasection'>
          <div className='imgholder'>
          <img className="planing" src={plans} alt='plans' />        
          </div>
          <div className='buttonholder'>
            <h2>IPU Exam Support</h2>
            <a href="https://courses.learningfolks.in/s/store"><button className='gotocourses'>Visit</button></a>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default HomeBanner1
