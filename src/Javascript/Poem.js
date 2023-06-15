import React from "react";
import "../Stylesheets/Poem.css";

const Poem = ({title, preview, onClick, pdf}) =>(
    <a className="poem"  href={pdf} >
        <div onClick={onClick}>
            <img src={preview} alt={title}/>
            <h2>{title}</h2>
        </div>
    </a>
)

export default Poem;