import React from "react";
import '../Stylesheets/bio.css';
import ss_img from '../images/ss_smiling.jpg'
import home_img from '../images/home.png'
function Bio(props){
    return(
        <div className="bio_container">
            <button className="home_btn" onClick={props.displaySlides}><span><img src={home_img}/></span></button>
            <img className="bio_img" src={ss_img}/>
            <div className="bio_txt">
                <h1>Swapnil Srivastava</h1>
            </div>
        </div>
        
    )
}

export default Bio;