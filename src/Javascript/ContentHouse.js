import React from "react";
import '../Stylesheets/ContentHouse.css'
import ContentBox from "./ContentBox";
import paper_1_img from "../images/paper_1_img.png"
import paper_1 from "../documents/paper_1.pdf"

function ContentHouse(){
    return(
        <div >
            <div className="big-daddy">
                <div className="my-line"></div>
                <p className="work-text">
                    Check Out Some Of My Work
                </p>
                <div className="my-line"></div>
            </div>
            <div className="content-house">
                <ContentBox heading="Creative Work" 
                expandedContent="Expanded" 
                collapsedContent = "Click to Expand" 
                backgroundColor="rgb(201, 251, 206)"/>
                <ContentBox heading="Software"
                 expandedContent="Expanded" 
                 collapsedContent = "Click to Expand"  
                 backgroundColor="rgb(238, 201, 251)"/>
                <ContentBox heading="Publications" 
                expandedContent={
                    <div className="publications">
                        <div className="publication_cont">
                            <div className="publication_item">
                                <a href="https://ceur-ws.org/Vol-3359/paper29.pdf">
                                    <img src={paper_1_img} alt="Designing a Recommender System to Recruit Older Adults for Research Studies"/>
                                </a>
                            </div>
                            <div className="publication_item">
                                <h2>Designing a Recommender System to Recruit Older Adults for Research Studies</h2>
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
                collapsedContent = "Click to Expand" 
                backgroundColor="rgb(166, 221, 249)"/>
            </div>
        </div>
    )
}

export default ContentHouse;