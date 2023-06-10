import React from "react";
import IntroText from './IntroText';
import BioLink from './BioLink'
import ContentHouse from './ContentHouse';
import Foot from './Foot';

function Home({setState}){

    return(
        <div>
            <IntroText/>
            <BioLink setState = {setState}/>
            <ContentHouse setState = {setState}/>
        </div>
    )
}

export default Home;