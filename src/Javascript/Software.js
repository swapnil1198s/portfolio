import React from "react";
import "../Stylesheets/Software.css"

const Software = ({title, preview, source}) =>{
    return(
        <a className="software" href={source}>
            <div>
                <img src={preview} alt={title}/>
                <h2>{title}</h2>
            </div>
        </a>
    );
}

export default Software;