import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './components/research';
import FundingHistory from './components/FundingHistory';
import Contact from './components/Contact';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/research' element={<Research />} />
          <Route path='/fundinghistory' element={<FundingHistory />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <footer className='text-center bg-indigo-950 text-white py-2'>
        © 2023<Link to='/login'>Mahbub-ul Alam</Link>. All rights reserved.</footer>
      </Router>
      
    </div>
  );
}

export default App;
