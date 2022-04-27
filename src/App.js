
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About';
import Form from './components/Form';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const promptAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      promptAlert("Dark mode has been enabled","light")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      promptAlert("Light mode has been enabled","dark")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextModifier" mode={mode} toggle={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path = "/" element={<Form toptext="Enter the text in below text area" mode={mode} promptAlert={promptAlert}/>}/>
        </Routes>
        <Routes>
          <Route exact path = "/about" element={<About/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
