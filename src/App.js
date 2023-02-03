import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import Results from './Components/pages/Results';
import Quiz from './Components/pages/Quiz';
import MyJojo from './Components/pages/MyJojo';
import { useState } from 'react';
import React from 'react'

function App() {

  const [response, setResponse] = useState({
    jonathan: 0, 
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0});

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/results' element={ <Results /> } />
          <Route path='/quiz' element={ <Quiz setResponse={setResponse}/> } />
          <Route path='/get-my-jojo' element={ <MyJojo response={response}/> }></Route>
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
