// src/App.jsx (Updated)

import React from 'react';
import './App.css'; 
// Import other components...

function App() {
  return (
    <div className="App"> 

      {/* --- ADD THIS NEW BUBBLE CONTAINER --- */}
      <div className="background-bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        {/* Add more .bubble divs if you want more bubbles */}
      </div>
      {/* ------------------------------------- */}

      {/* Your existing components */}
      {/* <Navbar /> */}
      {/* <Works /> */}
      {/* ... other components */}
    </div>
  );
}

export default App;