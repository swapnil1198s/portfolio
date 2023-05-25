import React from "react";
import '../Stylesheets/ContentHouse.css'
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
                <div className="content-box" id="c1">
                    <h2>
                        Creative Work
                    </h2>
                    <div className="my-line"></div>
                    <p>Blah Blah </p>
                </div>
                <div className="content-box" id="c2">
                    <h2>
                        Software
                    </h2>
                    <div className="my-line"></div>
                    <p>Blah Blah </p>
                </div>
                <div className="content-box" id="c3">
                    <h2>
                        Publications
                    </h2>
                    <div className="my-line"></div>
                    <p>Blah Blah </p>
                </div>
            </div>
        </div>
    )
}

export default ContentHouse;