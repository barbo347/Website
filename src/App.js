import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = { <Home/> }/>
          <Route path="/sobre" element = { <About/> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
