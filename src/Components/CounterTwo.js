import React, { useReducer } from "react";

// Initial state for the counter component
const initialState = {
  firstCounter: 0, // Initial value of firstCounter
};

// Reducer function that determines how state changes based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 }; // Increase firstCounter by 1
    case "decrement":
      return { firstCounter: state.firstCounter - 1 }; // Decrease firstCounter by 1
    case "reset":
      return initialState; // Reset state to initial state
    default:
      return state; // Return current state if action type is unknown
  }
};

// Functional component CounterTwo using useReducer to manage state
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState); // Initializing state and dispatch function

  return (
    <div>
      {/* Displaying the current value of firstCounter */}
      <div>count : {count.firstCounter}</div>

      {/* Button to increment firstCounter */}
      <button
        onClick={() => {
          dispatch({ type: "increment" }); // Dispatching action to increment firstCounter
        }}
      >
        Increment
      </button>

      {/* Button to decrement firstCounter */}
      <button
        onClick={() => {
          dispatch({ type: "decrement" }); // Dispatching action to decrement firstCounter
        }}
      >
        Decrement
      </button>

      {/* Button to reset state to initial state */}
      <button
        onClick={() => {
          dispatch({ type: "reset" }); // Dispatching action to reset state
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo; // Exporting CounterTwo component as default
