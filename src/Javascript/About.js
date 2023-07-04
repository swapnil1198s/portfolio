import React, {useState, useEffect} from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import '../Stylesheets/About.css'
import {FaArrowLeft} from 'react-icons/fa'
import profile_pic from '../images/ss_smiling.jpg'
import resume from '../documents/Resume.pdf'
import resume_pic from '../images/resume_pic.png'
import styled from "styled-components"

const CategoryContainer= styled.div`
margin: 0 0 1em 0;
border-top: 1px solid white;`;
const CategoryHeader= styled.div`
    display: flex;
    align-items:center;
    padding: 0.5em;
    cursor: pointer;`;
const SkillList = styled.ul`
    margin: 0;
    padding: 0 1em;
    list-style-type: none;
    max-height: ${props => props.isOpen ? '50vh' : '0'};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;`;

function About({setState}){
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = {
        'Front-End Development':['React', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
        'Back-End Development': ['Node.js', 'Python', 'Java', 'Express.js'],
        'Game Development': ['Pygame', 'Python'],
        'Database Management': ['MySQL', 'NoSQL', 'MongoDB'],
        'Machine Learning': ['Python', 'scikit-learn'],
        'DevOps/Cloud': ['Docker', 'Kubernetes','AWS', 'CI/CD principles'],
        'Web Services/API development':['REST'],
        'Programming Languages': ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'C#', ],
        'Security': ['SQL injections'],
        'Version Control':['Git', 'GitHub'],
        'UI/UX': ['Adobe XD', 'Sketch','Figma', 'Invision'],
        'Testing and Quality Assurance':['JUnit', 'Unit Testing', 'Integration Testing', 'System Testing'],
        'Robotics': ['Java', 'C', 'Python']
    };

    const toggleCategory = (category) =>{
        if(selectedCategory === category){
            setSelectedCategory(null);
        }
        else{
            setSelectedCategory(category);
        }
    };

    return(
        <div className="about_container">
            <div className="home_btn" onClick={()=>setState('home')}>
                    <FaArrowLeft/>
                </div>
            <div className="about_body" >
                
                <div className="background">
                    <div className="pic_cont">
                            <img className="bg_pic" src={profile_pic} alt="Swapnil Smiling"/>
                            <div className="name">
                                <p>Swapnil <br/> Srivastava</p>
                            </div>
                            <a href={resume}>
                                <div className="resume">
                                    <div className="resume_img">
                                        <img src={resume_pic} alt="Resume preview"/>
                                        <div className="img_overlay">
                                            <p>View Resume</p>
                                        </div>
                                    </div>
                                    <p>Resume</p>
                                </div>
                            </a>
                        </div>
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
                                    The next couple of years are all about gaining and strengthening skills that form the foundation of a great engineer. I would like to master the art of creating products that are technically sound and 
                                    empower the humans that use them. Since my strengths are Software Enginnering, Human-Centered Computing, and Full-Stack development, I want to grow skills by working on deployed systems as well as new systems.
                                    The goal is to get some experience with large software projects such that I can deepen the knowledge needed for 
                                    good software architecture, development, and deployment. This sets up the stage to have meaningful contributions in the Space Industry.
                                </p>
                                <h1 className="bg_headings">My Interests</h1>
                                <p>
                                    Going on mountain adventures and playing with my dog is the best. Playing basketball and soccer satisfies my competitive spirit. Learning new languages is fun as well. Right now
                                    I am learning Japanese. I have recently acquired a liking for growing vegitables, herbs, and flowers. I also make robots. Currently, I am the robotics coach for the Colleton County High 
                                    School's robotics team. 
                                </p>
                            </div>
                        </div>
                        <div className="se_cont">
                            <div className="se_skills">
                                <h1 className="bg_headings">Software Engineering Skills</h1>
                                <div className="skills_cont_wrapper">
                                    <div className="skills_cont">
                                        {Object.keys(categories).map((category)=>(
                                            <CategoryContainer key={category}>
                                                <CategoryHeader onClick={()=>toggleCategory(category)}>
                                                    {selectedCategory===category? <FaCaretDown/> : <FaCaretRight/>}
                                                    {category}
                                                </CategoryHeader>
                                                <SkillList isOpen={selectedCategory === category}>
                                                    {categories[category].map((skill)=>(
                                                        <li className="skill_item" key={skill}>{skill}</li>
                                                    ))}
                                                </SkillList>
                                            </CategoryContainer>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    );
}

export default About;