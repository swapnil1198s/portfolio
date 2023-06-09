import React from "react";
import '../Stylesheets/ContentHouse.css'
import ContentBox from "./ContentBox";

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
                <ContentBox heading="Creative Work" expandedContent="Expanded" collapsedContent = "Click to Expand" backgroundColor="rgb(201, 251, 206)"/>
                <ContentBox heading="Software" expandedContent="Expanded" collapsedContent = "Click to Expand"  backgroundColor="rgb(238, 201, 251)"/>
                <ContentBox heading="Publications" expandedContent="Expanded" collapsedContent = "Click to Expand" backgroundColor="rgb(166, 221, 249)"/>
            </div>
        </div>
    )
}

export default ContentHouse;