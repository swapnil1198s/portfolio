import '../Stylesheets/App.css';
import Banner from './Banner';
import Home from './Home';
import About from './About'
import Foot from './Foot';
import { useState } from 'react';
import WeatherApp from "./WeatherApp"
import Productivity from './Productuctivity';
import UnderConstruction from './UnderConstruction';

function App() {
  const [state, setState] = useState('home');
  
  return (
    <div className="App">
      <Banner />
      {state === 'home' && (<Home setState={setState}/>)} 
      {(state === 'bio') && (<About setState={setState}/>)}
      {(state === 'weather') && (<WeatherApp setState = {setState}/>)}
      {(state === 'productivity') && (<UnderConstruction setState = {setState}/>)}
      {(state === 'spaceSimulator') && (<UnderConstruction setState = {setState}/>)}
      {(state === 'pathFinder') && (<UnderConstruction setState = {setState}/>)}
      <Foot/>
    </div>
  );
}

export default App;
