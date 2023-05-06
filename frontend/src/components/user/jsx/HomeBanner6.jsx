import React from 'react';
import "../css/HomeBanner6Styles.css";
import Testimonial1 from "../../../img/banner/testimonial1.jpeg";
import Testimonial2 from "../../../img/banner/testimonial2.jpeg";
import Testimonial3 from "../../../img/banner/testimonial3.jpeg";
import {RiDoubleQuotesL , RiDoubleQuotesR} from 'react-icons/ri'

const HomeBanner6 = () => {
  return (
    <div>
      <div className='main_container_homebanner6'>
        <div className='top_section_homebanner6'>
            <h2>Testimonials</h2>
        </div>

        <div className='bottom_section_homebanner6'>
            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3><RiDoubleQuotesL/> Joining Learning Folks gave me insights of this technical world and it’s opportunities. <RiDoubleQuotesR/></h3>
                </div>

                <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        <img src={Testimonial1} alt='testimonial' />
                    </div>
                    <div className='detail_container_homebanner6'>
                        <h4>Himanshi Hora</h4>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3><RiDoubleQuotesL/> Associating with Learning Folks, it’s a great experience to have a great network of learners and experienced people. <RiDoubleQuotesR/></h3>
                </div>

                <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        <img src={Testimonial2} alt='testimonial' />
                    </div>
                    <div className='detail_container_homebanner6'>
                        <h4>Sujal</h4>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3><RiDoubleQuotesL/> My college life has taken such an impactful jump, has helped me impro my soft skills and personality. <RiDoubleQuotesR/></h3>
                </div>

                <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        <img src={Testimonial3} alt='testimonial' />
                    </div>
                    <div className='detail_container_homebanner6'>
                        <h4>Tarushi Mishra</h4>
                        <p></p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='bottom_section_homebanner6'>
            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3><RiDoubleQuotesL/>Ngl but being a first year student, studying in IPU's top college, I never really understood the classroom notes. LF's notes and video recommendations just saved my entire semester.
Much grateful.<RiDoubleQuotesR/></h3>
                </div>

                <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        {/* <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='testimonial' /> */}
                    </div>
                    <div className='detail_container_homebanner6'>
                        {/* <h4>John Doe</h4> */}
                        <p></p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3><RiDoubleQuotesL/>Thanks to the LF's community support where I could easily make contacts with my peers who have the same interests as mine.<RiDoubleQuotesR/></h3>
                </div>

                <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        {/* <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='testimonial' /> */}
                    </div>
                    <div className='detail_container_homebanner6'>
                        {/* <h4>John Doe</h4> */}
                        <p></p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3><RiDoubleQuotesL/>I didn't know there were so many domains in the tech sector until I saw large variety of resources floating in the community groups.Well done guys!<RiDoubleQuotesR/></h3>
                </div>

                <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        {/* <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='testimonial' /> */}
                    </div>
                    <div className='detail_container_homebanner6'>
                        {/* <h4>John Doe</h4> */}
                        <p></p>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default HomeBanner6
