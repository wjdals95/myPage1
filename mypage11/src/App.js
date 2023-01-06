import React from 'react';
import './App.css';
import Navi from './components/Navi/Navi';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import MySkill from './components/MySkill/MySkill';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navi />
      <Banner />
      <About />
      <MySkill />
      <Contact />
    </div>
  );
}

export default App;
