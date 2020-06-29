import React from 'react';
import './App.css';
import Slider from './Components/Slider.jsx';
import IphoneChecker from './Components/IphoneChecker.jsx';
import Logo from './resources/Logo.png'
import Turn from './resources/Artboard 1 copy 2.png';




function App() {
  return (
    <div>
      <IphoneChecker />
      <div className="App">
        <div className="turn-container"><img src={Turn} className="turn-img" alt="turn" /></div>
        <img src={Logo} alt="logo" className="logo" />
        <Slider />
      </div>
    </div>
  );
}

export default App;
