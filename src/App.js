import React, { useState, useEffect } from 'react';
import Pulse from 'react-reveal/Pulse';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count < 2 ? `Anxiety ${count} Cup Deep` : `Anxiety ${count} Cups Deep`;
  })

  return (
    <div className="app">
      <div className="cup-container">
        <div className="cup">
          <div className="handle"></div>
        </div>
      </div>
      <h2 className="ui header">You've had {count} {count < 2 ? "cup" : "cups"} of coffee.</h2>

      <button
        className="ui animated button"
        onKeyDown={(e) => console.log(e.key)}
        onClick={() => setCount(count + 1)}>
        <div className="visible content">More Coffee</div>
        <div className="hidden content"><i aria-hidden="true" className="coffee icon"></i></div>
      </button>
      <div className="coffees">
        {Array(count).fill("coffee").map((item, i) =>
          <Pulse><i aria-hidden="true" key={i} className="coffee huge icon"></i></Pulse>
        )}
      </div>
    </div>
  )

}

