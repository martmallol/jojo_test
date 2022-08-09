import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import Results from './Components/pages/Results';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>

      </Routes>
      </div>
    </Router>
  );
}

export default App;

//<Route path='/' exact component={Home} />
//<Route path='/results' component={Results} />