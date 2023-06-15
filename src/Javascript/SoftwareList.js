import React from "react";
import Software from "./Software";
import "../Stylesheets/SoftwareList.css"

const SoftwareList = ({programs}) =>{
    return(
        <div className="software-list">
            {programs.map((program)=>(
                <Software
                    title={program.title}
                    preview = {program.preview}
                    source = {program.source}
                />
            ))}
        </div>
    );
}

export default SoftwareList;