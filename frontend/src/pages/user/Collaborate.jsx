import React from "react";
import "../../components/user/css/ComingSoonStyles.css";
// import ComingSoonImage from "../../img/coming-soon.jpg";
import LogoTag from "../../img/LogoTag.jpeg";
import CollabEst from "../../img/CollabEst.jpg";
import Header from "../../components/user/jsx/Header";
// import { useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ComingSoon = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="main_container_soon">
        <h4>Learning Folks</h4>
        <div className="headings">
          <h5>Know Us</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <p>
                Learning folks is a student support community first, with
                support from professionals where we focus more on learning by
                ourselves. We share knowledge from specific domains where we
                have trained ourselves.
              </p>
            </div>

            <div className="right_section_box_soon">
              <img src={LogoTag} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="headings">
          <h5>Establishers</h5>
          <div className="main_box_soon">
            <div className="right_section_box_soon">
              <img src={CollabEst} alt="Establishers" />
            </div>

            <div className="left_section_box_soon">
              <p>
                Started by Bachelor of Technology students from various branches
                having skills ranging from business analysis to video, graphics
                and tech (comm skills) and currently holding a family of 2000+
                studentsfrom various courses and domains.
              </p>
            </div>
          </div>
        </div>
        <div className="headings">
          <h5>Our Expectations</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <p>
                Our association with you helps us reach more students where we
                expand and you benefit from a large network of students from all
                domains in our community. Better reach helps us transform and
                realise our vision with more momentum.
              </p>
            </div>
          </div>
        </div>
        <div className="headings">
          <h5>What Binds Us?</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <ul>
                <li>
                  <p>
                    You get benefits of being associated with a great student
                    community.
                  </p>
                </li>
                <li>
                  <p>
                    Your outreach widens across not just your campus but other
                    campuses too.
                  </p>
                </li>
                <li>
                  <p>
                    A new event always adds to our experience arsenal where we
                    get to explore a new beginning to something unknown.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="headings">
          <h5>Why We are Unique?</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <p>
                With exposure, networking and realisation support, we help each
                student work in the right direction based on their abilities.
                Being a part of the student community, we know their needs
                better than anyone else. Existing alternative educational models
                either are offline giants or non-interactive certain online
                platforms. Students do not find a solution to all their problems
                under one roof and practical application of their skills is not
                present.
              </p>
            </div>
          </div>
        </div>

        <div className="icons">
          <h5>Connect Us On!</h5>

          <div className="icons_container_footer">
            <a href=" https://www.linkedin.com/company/learning-folks/">
              <BsLinkedin className="icon1_footer" />
            </a>

            <a href="https://www.youtube.com/@learningfolks8635">
              <FaYoutubeSquare className="icon2_footer" />
            </a>

            <a href="https://chat.whatsapp.com/CsVKbuGcheBCOwlSD6SvVk">
              <FaWhatsappSquare className="icon3_footer" />
            </a>

            <a href="https://www.instagram.com/learningfolks/">
              <AiFillInstagram className="icon4_footer" />
            </a>

            <a href="https://www.facebook.com/learningfolks2022">
              <FaFacebookSquare className="icon5_footer" />
            </a>
          </div>

          {/* <div className='left_section_box_soon' style={{textAlign:'center'}}>
              <p>Also, don't forget to visit us at
                 learningfolks.in, where you can find
                 everything.
               </p>

            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
