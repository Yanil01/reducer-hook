import React, { useReducer } from "react";

// Initial state for the counter
const initialState = 0;

// Reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// Functional component CounterOne
function CounterOne() {
  // useReducer hook to manage state with the reducer function
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Display current count */}
      <div>Count: {count}</div>
      {/* Button to increment count */}
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      {/* Button to decrement count */}
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      {/* Button to reset count */}
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterOne;
