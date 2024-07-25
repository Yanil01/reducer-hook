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
function CounterThree() {
  // useReducer hook to manage state with the reducer function
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Display current count */}
      <div>Count: {countOne}</div>
      {/* Button to increment count */}
      <button
        onClick={() => {
          dispatchOne("increment");
        }}
      >
        IncrementOne
      </button>
      {/* Button to decrement count */}
      <button
        onClick={() => {
          dispatchOne("decrement");
        }}
      >
        DecrementOne
      </button>
      <div>
        {/* Display current count */}
        <div>Count: {countTwo}</div>
        {/* Button to increment count */}
        <button
          onClick={() => {
            dispatchTwo("increment");
          }}
        >
          IncrementTwo
        </button>
        {/* Button to decrement count */}
        <button
          onClick={() => {
            dispatchTwo("decrement");
          }}
        >
          DecrementTwo
        </button>
      </div>
      {/* Button to reset count */}
      <button
        onClick={() => {
          dispatchOne("reset");
          dispatchTwo("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterThree;
