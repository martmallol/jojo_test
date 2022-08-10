import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import Results from './Components/pages/Results';
import Quiz from './Components/pages/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/results' element={ <Results /> } />
          <Route path='/quiz' element={ <Quiz /> } />
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
