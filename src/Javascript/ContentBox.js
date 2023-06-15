import React, { useState } from "react";
import styles from '../Stylesheets/ContentBox.module.css'

const ContentBox = ({heading, expandedContent, collapsedContent, backgroundColor, expanded}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const [isContentVisible, setIsContentVisible] = useState(expanded);

    const handleClick = () => {
        if(isExpanded){
            setIsContentVisible(false);
            setIsExpanded(false);
        }
        else{
            setIsExpanded(true);
            setTimeout(()=>{
                setIsContentVisible(true);
            }, 200);
        }
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
            {isContentVisible? expandedContent: collapsedContent}
        </div>
    );
};

export default ContentBox;