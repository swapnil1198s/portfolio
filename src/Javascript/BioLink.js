import React from "react";
import '../Stylesheets/BioLink.css'

function BioLink({setState}){
    return(
        <div className="BioLink">
            <h3 className="text">
                Who is this monkey?
            </h3>
            <div className="link" onClick={()=>setState('bio')}>
                <h3>Click here to learn about me</h3>
            </div>
        </div>
    )
}

export default BioLink