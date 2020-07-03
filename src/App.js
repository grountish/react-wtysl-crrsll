import React from 'react';
import './App.css';
import Slider from './Components/Slider.jsx';
import Logo from './resources/Logo.png'
import Turn from './resources/Artboard 1 copy 2.png';
import Modal from './Components/Modal'



function App() {
  return (
    <div>
     
      <div className="App">
        <div className="turn-container"><img src={Turn} className="turn-img" alt="turn" /></div>
        <Modal />
        <a href="https://www.whattookyousolong.org/"> <img src={Logo} alt="logo" className="logo" /></a>
        <Slider />
      </div>
    </div>
  );
}

export default App;
