import React from "react";
import Poem from "./Poem";
import "../Stylesheets/PoemList.css";
import poem1 from "../documents/poems/poem1.pdf"
import poem2 from "../documents/poems/poem2.pdf"
import poem3 from "../documents/poems/poem3.pdf"
import poem4 from "../documents/poems/poem4.pdf"
import poem5 from "../documents/poems/poem5.pdf"

import prev1 from "../documents/poems/prev1.jpg"
import prev2 from "../documents/poems/prev2.jpg"
import prev3 from "../documents/poems/prev3.jpg"
import prev4 from "../documents/poems/prev4.jpg"
import prev5 from "../documents/poems/prev5.jpg"

const PoemList = () => {
    const poems = [
        {
            title: 'I stumble and fall',
            preview: prev1,
            pdf: poem1
        },
        {
            title: 'I am through',
            preview: prev2,
            pdf: poem2
        },
        {
            title: 'My reality',
            preview: prev3,
            pdf: poem3
        },
        {
            title: 'The moon and a curious mind',
            preview: prev4,
            pdf: poem4
        },
        {
            title: 'We are not cut from the same cloth',
            preview: prev5,
            pdf: poem5
        }
    ];
    return(
        <div>
            <div className="poem-list">
                {poems.map((poem)=>(
                    <Poem
                        key = {poem.title}
                        title = {poem.title}
                        preview = {poem.preview}
                        pdf  = {poem.pdf}
                    />
                ))}
            </div>
        </div>
    )
}
export default PoemList;