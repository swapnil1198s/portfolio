import monkey from '../images/monkey_cheers.gif';
import kid_goku from '../images/kid_goku.gif';
import happy from '../images/happy.gif';
import wolf from '../images/wolf_howling.gif';
import spaceship from '../images/spaceship.gif';
import skull_guy from '../images/skull_guy.gif';
import '../Stylesheets/App.css';
import Banner from './Banner';
import IntroText from './IntroText';
import DisplayBoard from './DisplayBoard';
import Bio from './Bio';
import BioLink from './BioLink'
import ContentHouse from './ContentHouse';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('slider');

  return (
    <div className="App">
      
      <header className="App-header">
        <img className='Banner-images' src={spaceship} alt="Spaceship" />
        <img className='Banner-images' src={wolf} alt="wolf" />
        <img className='Banner-images' src={happy} alt="happy" />
        <img className='Banner-images' src={monkey} alt="logo" />
        <img className='Banner-images' src={kid_goku} alt="kid goku" />
        <img className='Banner-images' src={skull_guy} alt="Heman villain" />
      </header>
      <Banner />
      <IntroText/>
      <BioLink/>
      <ContentHouse/>
      {/* {state === 'slider' && (
        <DisplayBoard displayBio={() => setState('bio') } />
      )}
      {state === 'bio' && (
        <Bio displaySlides = {() => setState('slider')}/>
      )} */}
    </div>
  );
}

export default App;
