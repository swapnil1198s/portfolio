import monkey from '../images/monkey_cheers.gif';
import kid_goku from '../images/kid_goku.gif';
import happy from '../images/happy.gif';
import wolf from '../images/wolf_howling.gif';
import spaceship from '../images/spaceship.gif';
import skull_guy from '../images/skull_guy.gif';
import '../Stylesheets/App.css';
import Banner from './Banner';
import Home from './Home';
import About from './About'

import { useState } from 'react';

function App() {
  const [state, setState] = useState('home');
  const changeState = (newState) => {
    setState(newState);
  }

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
      {state === 'home' && (<Home setState={setState}/>)} 
      {(state === 'bio') && (<About setState={setState}/>)}
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
