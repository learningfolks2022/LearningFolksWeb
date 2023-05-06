import React from "react";
import { Link } from "react-router-dom";
import "../css/HomeBanner2Styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HomeBanner2 = () => {
  return (
    <div>
      <div className="main_container_homebanner2">
        <div className="top_section_homebanner2">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className="slide_homebanner2">
                <iframe className="slide_image_homebanner2" src="https://www.youtube.com/embed/0sdBcuDiy3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </SwiperSlide>

            <SwiperSlide className="slide_homebanner2">
                <iframe className="slide_image_homebanner2" src="https://www.youtube.com/embed/uR-xx2ZS7EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </SwiperSlide>

            <SwiperSlide className="slide_homebanner2">
                <iframe className="slide_image_homebanner2" src="https://www.youtube.com/embed/-noTsCXJSzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </SwiperSlide>

            <SwiperSlide className="slide_homebanner2">
                <iframe className="slide_image_homebanner2" src="https://www.youtube.com/embed/Kvjntcn9roY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bottom_section_homebanner2">
          <p>
            To do Information of videos To do <br></br>Information of videos To
            do Information <br></br>of videos To do To do Information of videos
            To do
          </p>

          <Link to="/" className="btn_primary_homebanner2">
            Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;
