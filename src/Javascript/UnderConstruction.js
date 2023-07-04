import React, {useEffect} from "react";
import "../Stylesheets/UnderConstruction.css";
import { FaArrowLeft } from "react-icons/fa";

const UnderConstruction = ({setState}) =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="underConstruction">
            <div className="home_btn" onClick={()=>setState('home')}>
                <FaArrowLeft/>
            </div>

        </div>
    );
}

export default UnderConstruction;