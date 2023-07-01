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
import Footer from "../../components/user/jsx/Footer";

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
          <h5>Open for Collaboration</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <p>
              We are excited to partner with educational institutions, 
              college societies, academies, conservatories, seminaries, 
              colleges, or universities to create a synergistic relationship
              that benefits students and enhances their educational experience.
              <br /><br/>
              At Learning Folks, we believe in the power of collaboration and
              the collective wisdom of joining forces with like-minded institutions.
              By working together, we can unlock new opportunities, broaden our reach,
              and provide students with diverse learning resources.
              </p>
            </div>
          </div>
        </div>
        <div className="headings">
          <h5>Why Collaborate with Learning Folks?</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <ul>
                <li>
                  <p>
                  <b>Expand Your Reach:</b> You gain access to our extensive student
                  community when collaborating with Learning Folks. This includes
                  students from various courses, domains, and institutions. By 
                  tapping into our network, you can expand your reach beyond your
                   campus and connect with a broader audience.
                  </p>
                </li>
                <li>
                  <p>
                  <b>Mutual Benefits:</b> Collaboration with Learning Folks is a win-win 
                  situation. By partnering with us, you can enhance your brand visibility
                   and reputation. Additionally, your association with our student community
                    can provide you with valuable insights and perspectives that can further
                     enrich your educational offerings.
                  </p>
                </li>
                <li>
                  <p>
                  <b>Shared Resources:</b> At Learning Folks, we believe in the power of shared resources.
                  Through collaboration, we can pool our expertise and knowledge and help to create
                  a more robust and comprehensive learning environment. We can offer students a 
                  wider range of courses, workshops, mentorship programs, and other educational
                  opportunities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="headings">
          <h5>How to Collaborate?</h5>
          <div className="main_box_soon">
            <div className="left_section_box_soon">
              <p>We are open to various forms of collaboration, including but not limited to:</p>
              <br />
              <ul>
                <li>
                  <p>
                 <b>Joint Events:</b>  Let's organise workshops, seminars, webinars, and conferences
                  to create impactful student learning experiences.
                  </p>
                  <br />
                </li>
                <li>
                  <p>
                 <b>Guest Lectures and Faculty Exchanges:</b>  We can facilitate guest lectures and
                  faculty exchanges between our institutions, allowing students to benefit
                    from diverse perspectives and expertise.
                  </p>
                  <br />
                </li>
                <li>
                  <p>
                 <b>Content Sharing:</b>  Share your educational resources, study materials,
                  and research papers with our community, and we'll reciprocate with
                  our own valuable content.
                  </p>
                  <br />
                </li>
                <li>
                  <p>
                 <b>Student Exchange Programs:</b>  Explore the possibility of student
                  exchange programs, enabling students to broaden their horizons
                  and experience education from different institutions.
                  </p>
                  <br />
                </li>
                <li>
                  <p>
                 <b>Research Collaborations:</b>  Join us on research projects, encouraging
                  cross-institutional collaborations and fostering innovation.
                  </p>
                  <br />
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

        {/* <div className="icons">
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

          <div className='left_section_box_soon' style={{textAlign:'center'}}>
              <p>If you want to collaborate with Learning Folks,
                 we would love to hear from you. Together, we can 
                 create a dynamic and enriching educational ecosystem 
                 that empowers students and propels their success. 
                 Reach out to us today to explore the exciting possibilities 
                 of partnering with Learning Folks.
               </p>

            </div>
        </div> */}

        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ComingSoon;
