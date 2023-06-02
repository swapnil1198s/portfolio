import React from "react";
import '../Stylesheets/About.css'
import {FaArrowLeft} from 'react-icons/fa'
import profile_pic from '../images/ss_coffee_shop.jpeg'
import resume from '../documents/Resume.pdf'
import resume_pic from '../images/resume_pic.png'


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
                        <p>Hi! I am Swapnil Srivastava. I aspire to gain the skills that will enable me to start contributing towards the Space Race. 
                        However, I have a long way to go. Currently, I am finishing up the Masters in Computer Science program at Clemson University. 
                        As the next chapter of life begins, I would love to work on some robots or the revolutionary AI technology. 
                        So far, I have five years of experience in Software Development. I would say that I am well versed in CS fundamentals, Full stack development, 
                        Human-Centered Computing, Software Specification, Testing, and Data Structures. Passionate about advancing the physical and psychological capacity of human endeavors through technology. 
                        Fueled by ambition and driven by goals.<br/> Staying true to the following words by my mother:<br/>
                        "Do not find purpose in selfish endeavors. Give yourself up to service for others. Then you will find true success."
                        </p>
                    </div>
                    <div className="pic_cont">
                        <img className="bg_pic" src={profile_pic}/>
                        <div className="name">
                            <p>Swapnil <br/> Srivastava</p>
                        </div>
                        <div className="resume">
                            <a href={resume} download>
                                <img src={resume_pic}/>
                            </a>
                            <p>Download Resume</p>
                        </div>
                    </div>
                </div>
                <div className="resources">
                    
                </div>
            </div>
        </div>
    );
}

export default About;