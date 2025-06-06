import React, { useState } from "react";
import './App.css'

function App() {
    const [color, setColor] = useState("red");
  
    return (
      <div className="App">
        <p>Which color do you prefer?</p>
        <button id="red-button" onClick={(e) => setColor("red")}>Red</button>
        <button id="green-button" onClick={(e) => setColor("green")}>Green</button>
        <p className={color}>You prefer {color}</p>
      </div>
    );
  }

export default App
