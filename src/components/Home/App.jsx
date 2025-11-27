// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'; // <-- Add this import

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <div className="background-bubbles">
        {/* ... bubble divs ... */}
      </div>

      {/* Render your Home section here */}
      <Home /> 

      {/* ... other sections like Skills, About, Works ... */}
    </div>
  );
}
export default App;