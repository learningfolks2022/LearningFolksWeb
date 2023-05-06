import React from 'react';
import "../css/HomeBanner5Styles.css";
import Event1 from "../../../img/banner/event1.jpg";
import Event2 from "../../../img/banner/event2.jpg";
import Event3 from "../../../img/banner/event3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const HomeBanner5 = () => {
  return (
    <div>
      <div className='main_container_homebanner5'>
        <div className='top_section_homebanner5'>
            <h2>Events</h2>
        </div>

        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              450: {
                slidesPerView: 1.3,
                spaceBetween: 25,
              },
              600: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              760: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1015: {
                slidesPerView: 2.2,
                spaceBetween: 25
              },
              1260: {
                slidesPerView: 3,
                spaceBetween: 25
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[FreeMode, Pagination]}
            className="swiper_homebanner5"
          >
                  <SwiperSlide>
                  <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event1} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>SEPT</h4>
                        <h3>26</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Link-git</h2>
                        <p>We all have struggled to get hold of “LinkedIn” or “GitHub” as a beginner.
and that is why we brought “LINK-(g)it” to you to meet that need.●	This event helped us to widen our student base.</p>
                    </div>
                </div>
            </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event2} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>OCT</h4>
                        <h3>12</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2> Personality se Placements(PSP) </h2>
                        <p>We conducted a session named,(PSP) with the same wisdom in
active collaboration with Career Launcher to train the students for their future placements.</p>
                    </div>
                </div>
            </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event3} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>JUL</h4>
                        <h3>18</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Roadmap to DSA</h2>
                        <p>Students are on the lookout for opportunities to tackle real-world problems and be a part of
something meaningful. This event helped them engage with like-minded people on our
platform.</p>
                    </div>
                </div>
            </div>
                  </SwiperSlide>
    
          </Swiper>





        {/* <div className='bottom_section_homebanner5'>
            <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event1} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>SEPT</h4>
                        <h3>26</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Link-git</h2>
                        <p>We all have struggled to get hold of “LinkedIn” or “GitHub” as a beginner.
and that is why we brought “LINK-(g)it” to you to meet that need.●	This event helped us gain outreach and widen our student base.</p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event2} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>OCT</h4>
                        <h3>12</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2> Personality se Placements(PSP) </h2>
                        <p>We conducted a session named,(PSP) with the same wisdom in
active collaboration with Career Launcher to train the students for their future placements.</p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event3} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>JUL</h4>
                        <h3>18</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Roadmap to DSA</h2>
                        <p>Students are on the lookout for opportunities to tackle real-world problems and be a part of
something meaningful. This event helped them engage with like-minded people on our
platform.</p>
                    </div>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default HomeBanner5
