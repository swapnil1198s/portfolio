import React, { useState } from "react";
import styles from '../Stylesheets/ContentBox.module.css'

const ContentBox = ({heading, expandedContent, collapsedContent, backgroundColor}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    };

    const style = {
        backgroundColor : backgroundColor
    };

    return(
        <div 
        onClick={handleClick} 
        style={style}
        className= {`${styles.content_box} ${isExpanded ? styles.expanded: styles.collapsed}`} id="c2">
            <h2 className="panel_heading">{heading}</h2>
            <div className= {`${styles.my_line}`}></div>
            <p>{isExpanded? <h1>{expandedContent}</h1>: collapsedContent}</p>
        </div>
    );
};

export default ContentBox;