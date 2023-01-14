import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  /*Using state to toggle between dark mode and light mode*/
  const [mode, setMode] = useState("light");
  /*Creating an alert state*/
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#010c0f';
      showAlert("Dark mode has been enabled", "success")
      //code to change title of page dynamically
      //document.title = 'Textutils - Dark mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/*Created a navbar component*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/*Creating alert component */}
    <Alert alert={alert}/>
    {/*<Navbar title="TextUtils" aboutText="About TextUtils" />*/}
    {/*<Navbar/>*/}
    <div className="container my-3">
      {/*Created a TextForm component*/}
    <TextForm showAlert={showAlert} heading="Enter the text below to analyze:" mode={mode}/>
    {/*Created a About component*/}
    {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
