import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import Introduction from './Components/Introduction.jsx';
import Contact from './components/Contact.jsx';
import LorealPage from './components/LorealPage.jsx';
import Portfolio from './components/Portfolio.jsx'; 
import CarCard from './components/Car.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/contact' element={<Contact/>} />
        <Route path="/" element={<Introduction />} />
        <Route path="/product" element={<LorealPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/carcard" element={<CarCard />} />
      </Routes>
    </>
  );
}

export default App;
