import React from "react";
import '../Stylesheets/About.css'
import {FaArrowLeft} from 'react-icons/fa'
import Foot from "./Foot";


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
                    <p>Homepage</p>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default About;