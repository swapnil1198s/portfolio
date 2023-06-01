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
import Foot from './Foot';

import { useState } from 'react';

function App() {
  const [state, setState] = useState('home');
  const changeState = (newState) => {
    setState(newState);
  }

  return (
    <div className="App">
      <Banner />
      {state === 'home' && (<Home setState={setState}/>)} 
      {(state === 'bio') && (<About setState={setState}/>)}

      <Foot/>
    </div>
  );
}

export default App;
