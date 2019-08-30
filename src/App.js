import React, { useState, useEffect } from 'react';
import Pulse from 'react-reveal/Pulse';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  // Declare multiple state variables
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  useEffect(() => { 
    document.title = count < 2 ? `Anxiety ${count} Cup Deep` : `Anxiety ${count} Cups Deep`;
  })

  return (
    <div>
      <p>You've had {count} {count < 2 ? "cup" : "cups"} of coffee.</p>

      <button
        className="ui animated button"
        onKeyDown={(e)=>console.log(e.key)}
        onClick={() => setCount(count + 1)}>
         <div class="visible content">More Coffee</div>
    <div class="hidden content"><i aria-hidden="true" class="coffee icon"></i></div>
        </button>
      <div className="coffees">
        {Array(count).fill("coffee").map(item =>
          <Pulse><i aria-hidden="true" class="coffee huge icon"></i></Pulse>
        )}
      </div>
    </div>
  )

}

