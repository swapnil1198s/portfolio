import React from "react";
import '../Stylesheets/About.css'
import {FaArrowLeft} from 'react-icons/fa'
import profile_pic from '../images/ss_coffee_shop.jpeg'


function About({setState}){
    return(
        <div className="about_container">
            {/* <div className="about_heading">
                <div className="my-line"></div>
                <p className="work-text">
                    A Few Words About Me
                </p>
                <div ></div>
                <div className="my-line"></div>
            </div> */}
            <div className="about_body" >
                <div className="home_btn" onClick={()=>setState('home')}>
                    <FaArrowLeft/>
                </div>
                <div className="background">
                    <div className="bg_text">
                        Hi! I am Swapnil Srivastava. I am in the final months of my MS in Computer Science program at Clemson University.
                    </div>
                    <div className="pic_cont">
                        <img className="bg_pic" src={profile_pic}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;