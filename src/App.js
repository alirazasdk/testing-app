import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  const helmetContext = {};
  return (
    <>
      <Router>
        <HelmetProvider context={helmetContext}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HelmetProvider>
      </Router>
    </>
  );
}

export default App;
