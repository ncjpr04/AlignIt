import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Games from './Components/Games';

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <Home />
      <Games />
    </div>
  );
}

export default App;
