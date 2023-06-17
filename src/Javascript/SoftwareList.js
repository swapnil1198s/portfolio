import React from "react";
import Software from "./Software";
import "../Stylesheets/SoftwareList.css"

const SoftwareList = ({programs}) =>{
    return(
        <div className="software-list">
            {programs.map((program)=>(
                <Software
                    key={program.title}
                    title={program.title}
                    preview = {program.preview}
                    source = {program.source}
                    description={program.description}
                />
            ))}
        </div>
    );
}

export default SoftwareList;