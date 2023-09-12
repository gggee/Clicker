import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Props from './pages/props';
import State from './pages/state';
import Click from './pages/click';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/props" element={<Props/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/click" element={<Click/>}/>
      </Routes>
    </Router>
  );
}

export default App;
