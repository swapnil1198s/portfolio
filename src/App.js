import monkey from './monkey_cheers.gif';
import kid_goku from './kid_goku.gif';
import happy from './happy.gif';
import wolf from './wolf_howling.gif';
import spaceship from './spaceship.gif';
import skull_guy from './skull_guy.gif';
import './App.css';
import Banner from './Banner';
function App() {
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
    </div>
  );
}

export default App;
