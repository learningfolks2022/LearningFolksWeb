import React, { useState } from "react";
import "../css/AboutBanner2Styles.css"

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

// use fade-in-left and fade0in-right for animations
const AboutBanner2 = () => {
  return (
    <div className='about_banner_second_container'>
      <div className='main_content_banner'>
        <h1 className='main_heading'>The Learning Folks' Story</h1>
        <p className="second_banner_content">
          At Learning Folks, we are more than just a community -
          we are a dedicated student support system. Our platform brings
          together professionals and learners to foster a collaborative
          environment where self-directed learning is at the forefront.
          We specialise in sharing knowledge from various domains,
          leveraging the expertise acquired through our training.
        </p>
        <br />
        <p className="second_banner_content">
          <ReadMore>
            Learning Folks stands out from other educational platforms
            due to our commitment to exposure, networking, and personalised
            support. We believe in guiding students towards the right path
            based on their unique abilities. As active members of the
            student community ourselves, we understand their needs better
            than anyone else. Unlike traditional offline giants or
            non-interactive online platforms, we offer a comprehensive
            solution that addresses all aspects of a student's journey.
            From knowledge acquisition to practical application, we strive
            to empower learners and bridge the gaps in their education.
            <br /><br />
          </ReadMore>
        </p>
      </div>
      <div className="about_second_banner_section">
        <img src="/static/media/logo.abe88664698e890898be.png" alt="learning" />
      </div>
    </div>
  )
}

export default AboutBanner2