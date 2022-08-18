import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import Results from './Components/pages/Results';
import Quiz from './Components/pages/Quiz';
import MyJojo from './Components/pages/MyJojo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/results' element={ <Results /> } />
          <Route path='/quiz' element={ <Quiz /> } />
          <Route path='/get-my-jojo' element={ <MyJojo/> }></Route>
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
