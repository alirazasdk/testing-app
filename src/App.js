import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


function App() {
  return (
    <>
      <Router>
        <Helmet>
          <title>Learning React Helmet!</title>
          <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
