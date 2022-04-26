
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About';
import Form from './components/Form';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextModifier" />
        <Routes>
          <Route exact path = "/" element={<Form/>}/>
        </Routes>
        <Routes>
          <Route exact path = "/about" element={<About/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
