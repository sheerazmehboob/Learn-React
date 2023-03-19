import React, { useState } from 'react'

export default function FunctionalState() {
  const [count,setCount] = useState(0)

  const Increment = () =>
  {
    setCount(count+1);
  }

  const Decrement = () =>
  {
    setCount(count-1); 
  }

  const Reset = () =>
  {
    setCount(0);
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}
