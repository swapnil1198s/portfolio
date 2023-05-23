import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import poetry_bg from '../images/poetry_bg.jpeg'
import game_image from '../images/2d_game_screenshot.png'
import '../Stylesheets/custom_slide.css';

function DisplayBoard(props){
    const images = [
        game_image,
        ,
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    
    return(
        <div className="board">
            {/* {state === "slider" && }
            {state === "bio" && }
            {state === "poems" &&} */}
            <Slide autoplay={true}>
                <div className="each-slide-effect game-slide">
                    <div style={{ 'backgroundImage': `url(${images[0]})`}}>
                        <span>
                            <a href="https://github.com/swapnil1198s/Shoot-forest-shoot-" target="_blank">
                                Play This 2D Shooting Game As It Is Being Developed
                            </a>
                        </span>
                    </div>
                </div>
                <div className="each-slide-effect poem-slide">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <span>Read Poems Written By Swapnil Srivastava</span>
                    </div>
                </div>
                <div className="each-slide-effect bio-slide">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <span onClick={props.displayBio}>A Happy Monkey</span>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default DisplayBoard;