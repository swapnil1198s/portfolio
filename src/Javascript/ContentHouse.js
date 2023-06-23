import React, { useState } from "react";
import '../Stylesheets/ContentHouse.css'
import ContentBox from "./ContentBox";
import paper_1_img from "../images/paper_1_img.png";
import PoemList from "./PoemList";
import Software from "./SoftwareList";
import game1_img from "../images/game1.png";
import game2_img from "../images/game2.png";
import web1 from "../images/web1.png";
import py1 from "../images/nightscout_img.png";
import py2 from "../images/newplot.png";
import py3 from "../images/opteamal.png";
import dtSt from "../images/dtSt.jpeg";
import at from "../images/at.png"

function ContentHouse({setState}){
    const [hover, setHover] = useState(false);
    const live = [
        {
            title: 'Portfolio Website',
            preview: web1,
            source: 'https://github.com/swapnil1198s/portfolio',
            description: 'This is a website built using the MERN stack. The purpose of this website is to showcase a variety of products built by yours truly.'
        },
    ]
    const games = [
        {
            title: 'Uncle Stormtrooper',
            preview: game1_img,
            source: 'https://github.com/swapnil1198s/Uncle-Stormtrooper',
            description: 'This is a 2D platformer game that was built using pygame. You can access this game by clicking on this card.'
        },
        {
            title: 'Monster Shot',
            preview: game2_img,
            source: 'https://github.com/swapnil1198s/Monster-Shot',
            description: 'A shooting game that was built using pygame. You can access this game by clicking on this card.'
        },
    ]
    const websites = [
        {
            title: 'Portfolio Website',
            preview: web1,
            source: 'https://github.com/swapnil1198s/portfolio',
            description: 'This is a website built using the MERN stack. The purpose of this website is to showcase a variety of products built by yours truly.'
        },
        {
            title: 'Op-team-al: A project management app',
            preview: py3,
            source: 'https://github.com/swapnil1198s/op-team-al',
            description: 'A protect management application built for Booz Allen Hamilton. Users can manage projects and the talent assigned to each project. Built using the Django web framework.'
        }
    ]
    const datamanagement = [
        {
            title: 'Op-team-al: A project management app',
            preview: py3,
            source: 'https://github.com/swapnil1198s/op-team-al',
            description: 'A protect management application built for Booz Allen Hamilton. Users can manage projects and the talent assigned to each project. Built using the Django web framework.'
        }
    ]
    const python = [
        {
            title: 'Night Scout Testing Script',
            preview: py1,
            source: 'https://github.com/swapnil1198s/Nightscout-test-scripting',
            description: 'An script for automating the unit testing of Night Scout repository.'
        },
        {
            title: 'AI Ethics perception gathering reddit crawler',
            preview: py2,
            source: 'https://github.com/swapnil1198s/AI-Ethics-Reddit-Crawler',
            description: 'A reddit crawler that scraps the AI Ethics subreddit for data with the intention of understanding the perceptions regarding the topic.'
        },
        {
            title: 'Op-team-al: A project management app',
            preview: py3,
            source: 'https://github.com/swapnil1198s/op-team-al',
            description: 'A protect management application built for Booz Allen Hamilton. Users can manage projects and the talent assigned to each project. Built using the Django web framework.'
        }
    ]
    const java = [
        {
            title: 'Data Structures',
            preview: dtSt,
            source: 'https://github.com/swapnil1198s/Data-Structures-Course/tree/master/Data%20Structures/src/edu/cofc/csci230',
            description: 'A collection of data structures such as linked list and trees built using java.'
        },
        {
            title: 'Activity Tracker',
            preview: at,
            source: 'https://github.com/swapnil1198s/ActivityTracker/tree/master',
            description: 'An activity tracker application used for measuring and managing fitness at a personal level.'
        }
    ]
    return(
        <div >
            <div className="big-daddy">
                <div className="my-line"></div>
                <p className="main_content_heading">
                    Check Out Some Of My Work
                </p>
                <div className="my-line"></div>
            </div>
            <div className="widget_container">
                    <div className="weather_widget widget" onClick={()=>setState('weather')}><p>Weather App</p></div>
                    <div className="productivity_widget widget" ><p>Productivity Manager</p></div>
                    <div className="space_simulator_widget widget"><p>Space Exploration Simulator</p></div>
                    <div className="path_finder_widget widget" ><p>Path Finder</p></div>
            </div>
            <div className="content-house">
                <ContentBox heading="Creative Work" 
                expandedContent={<div className="expanded">
                    <h2 className="content_heading">
                            Poems
                    </h2>
                    <PoemList/>
                    <h2 className="content_heading">
                            Illustrations
                    </h2>
                    <div className="content_container">
                        Coming soon
                    </div>
                    <h2 className="content_heading">
                            Short Stories
                    </h2>
                    <div className="content_container">
                        Coming soon
                    </div>
                    <h2 className="content_heading">
                            Comics
                    </h2>
                    <div className="content_container">
                        Coming soon
                    </div>
                    <h2 className="content_heading">
                            Videos
                    </h2>
                    <div className="content_container">
                        Coming soon
                    </div>
                </div>} 
                collapsedContent = {
                    <div className="collapsed">
                        <p>This card contains a collection of my creative work.</p>
                        <h2>Click to view:</h2>
                        <ul>
                            <li>Videos</li>
                            <li>Poems</li>
                            <li>Illustrations</li>
                        </ul>
                    </div>
                } 
                backgroundColor="rgb(201, 251, 206)"
                expanded={false}/>
                <ContentBox expanded={true} heading="Software"
                 expandedContent={
                    <div className="expanded">
                        <h2 className="content_heading">Live Applications</h2>
                        <Software programs={live}/>
                        <h2 className="content_heading">Python Programs</h2>
                        <Software programs={python}/>
                        <h2 className="content_heading">Games</h2>
                        <Software programs={games}/>
                        <h2 className="content_heading">Websites</h2>
                        <Software programs={websites}/>
                        <h2 className="content_heading">Data Management</h2>
                        <Software programs={datamanagement}/>
                        <h2 className="content_heading">Java Programs</h2>
                        <Software programs={java}/>
                        <h2 className="content_heading">Machine Learning</h2>
                        <Software programs={games}/>
                    </div>
                    } 
                 collapsedContent = {
                    <div className="collapsed">
                        <p>This card contains a collection of software created by me.</p>
                        <h2>Click to view:</h2>
                        <ul>
                            <li>Games</li>
                            <li>Websites</li>
                            <li>Algorithms</li>
                        </ul>
                    </div>
                }  
                 backgroundColor="rgb(238, 201, 251)"/>
                <ContentBox expanded={false} heading="Publications" 
                expandedContent={
                    <div className="expanded publications">
                        <div className="publication_cont">
                            
                            <div className="publication_item">
                                <h2 className="publication_title">Designing a Recommender System to Recruit Older Adults for Research Studies</h2>
                                <a href="https://ceur-ws.org/Vol-3359/paper29.pdf">
                                    <div className="publication_img" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                                        <img src={paper_1_img} alt="Designing a Recommender System to Recruit Older Adults for Research Studies"/>
                                        {hover && <div className="hover-text">View Publication</div>}
                                    </div>
                                </a>
                                <p>
                                    Recruiting older adults for research studies is a challenging endeavor. We conducted an interview to understand older adults’
                                    preferences and expectations, with the goal of building a recommender system to support the selection of suitable research
                                    studies. Our findings suggest that sharing the results of the studies they participated in would motivate older adults to
                                    participate in more studies and give them a feeling of self-accomplishment and belonging. We list 15 design implications
                                    based on our user research and present a prototype system based on these design implications.
                                </p>
                            </div>
                        </div>
                    </div>
                } 
                collapsedContent = {
                    <div className="collapsed">
                        <p>This card contains a collection of my academic publications.</p>
                        <h2>Click to view:</h2>
                        <ul>
                            <li>Conference papers</li>
                            <li>Journal articles</li>
                            <li>Ongoing research</li>
                        </ul>
                    </div>
                }  
                backgroundColor="rgb(166, 221, 249)"/>
            </div>
        </div>
    )
}

export default ContentHouse;