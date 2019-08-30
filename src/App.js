import React, { useState, useEffect } from 'react';

import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  // Declare multiple state variables
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Fool Me ${count} Times`;
    });
  
  

  return (
    <div>
      <p>You've had {count} cups of coffee.</p>
      
      <button onClick={() => setCount(count + 1)}>More Coffee</button>
      <div className="coffees">
        {Array(count).fill("coffee").map(item =>  <i aria-hidden="true" class="coffee huge icon"></i> )
        }
      </div>
    </div>
  )

}

