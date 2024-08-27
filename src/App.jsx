import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollMarque from './Components/ScrollMarque';
import Marquee from './Components/Marque';
import Contact from './Components/Contact';
import GameList from './Components/GameList';
import './App.css';
function App() {
  return (
    <div className="overflow-x-hidden  relative">


      <Navbar />
      <Home />
      {/* <GameList/> */}
      <ScrollMarque />
      <Contact />
      <Marquee />
      <Footer />
    </div>
  );
}

export default App;
