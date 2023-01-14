import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  /*Using state to toggle between dark mode and light mode*/
  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#010c0f';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/*Created a navbar component*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/*<Navbar title="TextUtils" aboutText="About TextUtils" />*/}
    {/*<Navbar/>*/}
    <div className="container my-3">
      {/*Created a TextForm component*/}
    <TextForm heading="Enter the text below to analyze:" mode={mode}/>
    {/*Created a About component*/}
    {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
