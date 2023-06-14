import React from "react";
import '../Stylesheets/About.css'
import {FaArrowLeft} from 'react-icons/fa'
import profile_pic from '../images/ss_smiling.jpg'
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
            <div className="home_btn" onClick={()=>setState('home')}>
                    <FaArrowLeft/>
                </div>
            <div className="about_body" >
                
                <div className="background">
                    <div className="words">
                        <div className="bg_text_cont">
                            <div className="bg_text">
                                <h1 className="bg_headings">My Purpose</h1>
                                <p>
                                    Each individual has varying pusposes for why they do things. One of my purposes in life is to contribute 
                                    to <b>Space Exploration</b>. However, before that one must become able enough to have a meaningful contribution.
                                    This website and many other things that I do are done with the intent of cultivating skills such that my individual capability is worthy of even being considered.
                                    When it is in accordance with the Universe's plans, I will have to face the opportunity to act out the final chapter of this purpose. 
                                    Which is to be included in our efforts of becoming a Space Sailing species.
                                </p>
                                <h1 className="bg_headings">The Current Goal</h1>
                                <p>
                                    Since my strengths are Software Enginnering, Human-Centered Computing, and Full-Stack development, I want to get experience with some live and new projects.
                                    The goal is to get some experience with large software projects such that I can deepen the knowledge needed for 
                                    good software architecture, development, and deployment. 
                                </p>
                                <h1 className="bg_headings">My Interests</h1>
                            </div>
                        </div>
                        <div className="se_cont">
                            <div className="se_skills">
                                <h1 className="bg_headings">Software Engineering Skills</h1>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="pic_cont">
                        <img className="bg_pic" src={profile_pic}/>
                        <div className="name">
                            <p>Swapnil <br/> Srivastava</p>
                        </div>
                        <div className="resume">
                            <a href={resume}>
                                <img src={resume_pic}/>
                            </a>
                            <p>Resume</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;