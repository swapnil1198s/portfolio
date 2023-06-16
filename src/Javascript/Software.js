import React from "react";
import "../Stylesheets/Software.css"

const Software = ({title, preview, source, description}) =>{
    return(
        <a className="software" href={source}>
            <div>
                <div className="software_img">
                    <img src={preview} alt={title}/>
                    <div className="img_overlay">
                        <p>{description}</p>
                    </div>
                </div>
                <h2>{title}</h2>
            </div>
        </a>
    );
}

export default Software;