import React, { useState } from 'react';
import './App.css';

export default function App() {
  const[count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count +1)}>Click Here</button>
      </div>
    )
  
}

