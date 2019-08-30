import React, { useState, useEffect } from 'react';

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
      <p className="glitch">You've had {count} {count < 2 ? "cup" : "cups"} of coffee.</p>

      <button
        onKeyDown={(e)=>console.log(e.key)}
        onClick={() => setCount(count + 1)}>More Coffee</button>
      <div className="coffees">
        {Array(count).fill("coffee").map(item =>
          <i aria-hidden="true" class="coffee huge icon"></i>
        )}
      </div>
    </div>
  )

}

