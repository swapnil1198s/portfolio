import React, { useState } from "react";
import '../Stylesheets/ContentHouse.css'
import ContentBox from "./ContentBox";
import paper_1_img from "../images/paper_1_img.png";
import paper_1 from "../documents/paper_1.pdf";

function ContentHouse(){
    const [hover, setHover] = useState(false);
    
    return(
        <div >
            <div className="big-daddy">
                <div className="my-line"></div>
                <p className="content_heading">
                    Check Out Some Of My Work
                </p>
                <div className="my-line"></div>
            </div>
            <div className="content-house">
                <ContentBox heading="Creative Work" 
                expandedContent={<div className="expanded"></div>} 
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
                backgroundColor="rgb(201, 251, 206)"/>
                <ContentBox heading="Software"
                 expandedContent={<div className="expanded"></div>
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
                <ContentBox heading="Publications" 
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