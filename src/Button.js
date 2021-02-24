import React, { useState } from 'react';

function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <button onClick = {()=> setCounter(counter+1)}>
    Add
    </button>
    <text>{counter}</text>
    </div>
  );
}

export default Button;
