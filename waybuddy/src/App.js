import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Homepage from './pages/HomePage/HomePage';
import Navlink from './pages/Navlink/navlink';
import Contribute from './pages/Contribute/contribute';

const App = () => {
  return (
    <div>
      <Router> 
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/navlink" element={<Navlink />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
