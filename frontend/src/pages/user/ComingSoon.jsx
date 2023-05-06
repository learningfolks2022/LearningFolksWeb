import React from 'react';
import "../../components/user/css/ComingSoonStyles.css";
import ComingSoonImage from "../../img/coming-soon.jpg";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div className='main_container_soon'>
        <div className='main_box_soon'>
            <div className='left_section_box_soon'>
                <h4>Hello Folks !</h4>
                <h3>Something Awesome is Coming</h3>
                <p>In the very future we will be launching our new features for you guys.</p>
                <button onClick={()=>navigate('/')}>Go to Home</button>
            </div>

            <div className='right_section_box_soon'>
                <img src={ComingSoonImage} alt="ComingSoon" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
