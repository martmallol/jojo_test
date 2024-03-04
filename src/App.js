import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import Results from './Components/pages/Results/Results';
import Quiz from './Components/pages/Quiz/Quiz';
import MyJojo from './Components/pages/MyJojo/MyJojo';
import { React, useState } from 'react';

const App = () => {
  const [characterLikeness, setCharacterLikeness] = useState({
    jonathan: 0,
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0
  });

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/results' element={ <Results /> } />
          <Route path='/quiz' element={ <Quiz characterLikeness={characterLikeness} setCharacterLikeness={setCharacterLikeness}/> } />
          <Route path='/get-my-jojo' element={ <MyJojo characterLikeness={characterLikeness}/> }></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
