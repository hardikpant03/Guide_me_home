import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Homepage from './pages/HomePage/HomePage';
import Solution from './pages/Navlink/solution';
import Contribute from './pages/Contribute/contribute';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div>
      <Router> 
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
