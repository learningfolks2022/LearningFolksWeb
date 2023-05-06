import React from 'react';
import "../css/HomeBanner4Styles.css";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi"; 
import { AiOutlineRight } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';

const HomeBanner4 = () => {
  return (
    <div>
      <div className='main_container_homebanner4'>
        <div className='top_section_homebanner4'>
            <h2>Our Services Made For You</h2>
        </div>

        <div className='bottom_section_homebanner4'>
            <div className='card_container_homebanner4'>
                <div className='card_top_section_homebanner4'>
                    <div className='card_icon_container_homebanner4'>
                        <HiUserGroup className="card_icon_homebanner4" />        
                    </div>
                    <h4>Community</h4>
                    <p>Share the skills you've learnt with others.An educational platform that offers beginners succinct and high-quality information.</p>
                </div>

                <div className='card_bottom_section_homebanner4'>
                    <Link to="\">Read More <AiOutlineRight className='right_icon_homebanner4' /></Link>
                </div>
            </div>

            <div className='card_container_homebanner4'>
                <div className='card_top_section_homebanner4'>
                    <div className='card_icon_container_homebanner4'>
                        <FaUserGraduate className="card_icon_homebanner4" />
                    </div>
                    <h4>Student</h4>
                    <p>Giving students a forum where they may use their pedagogical expertise to further adorn it</p>
                </div>

                <div className='card_bottom_section_homebanner4'>
                    <Link to="\">Read More <AiOutlineRight className='right_icon_homebanner4' /></Link>
                </div>
            </div>

            <div className='card_container_homebanner4'>
                <div className='card_top_section_homebanner4'>
                    <div className='card_icon_container_homebanner4'>
                        <BsBriefcaseFill className="card_icon_homebanner4" />
                    </div>
                    <h4>Work</h4>
                    <p>Keeping you informed on the technology you're studying through a variety of internships, job possibilities, and what the most recent progress in it.</p>
                </div>

                <div className='card_bottom_section_homebanner4'>
                    <Link to="\">Read More <AiOutlineRight className='right_icon_homebanner4' /></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner4
