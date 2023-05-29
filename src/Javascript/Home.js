import React from "react";
import IntroText from './IntroText';
import DisplayBoard from './DisplayBoard';
import Bio from './Bio';
import BioLink from './BioLink'
import ContentHouse from './ContentHouse';
import Foot from './Foot';

function Home({setState}){

    return(
        <div>
            <IntroText/>
            <BioLink setState = {setState}/>
            <ContentHouse setState = {setState}/>
            <Foot/>
        </div>
    )
}

export default Home;