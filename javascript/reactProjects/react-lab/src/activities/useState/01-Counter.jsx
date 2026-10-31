// GOAL: Show a number that goes up when you click a button.
// CONCEPT: useState gives a component a value that survives re-renders.
// THEN TRY: add a "-1" button and a "Reset" button.

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}