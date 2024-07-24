import React, { useReducer } from "react";

// Initial state for the counter component
const initialState = {
  firstCounter: 0, // Initial value of firstCounter
  secondCounter: 10, // Initial value of secondCounter
};

// Reducer function that determines how state changes based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value }; // Increment firstCounter by action.value
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value }; // Decrement firstCounter by action.value
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value }; // Increment secondCounter by action.value
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value }; // Decrement secondCounter by action.value
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
      <div>First Counter : {count.firstCounter}</div>
      {/* Displaying the current value of secondCounter */}

      <div>Second Counter : {count.secondCounter}</div>

      {/* Button to increment firstCounter by 1 */}
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>

      {/* Button to decrement firstCounter by 1 */}
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>

      {/* Button to increment firstCounter by 5 */}
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment 5
      </button>

      {/* Button to decrement firstCounter by 5 */}
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement 5
      </button>
      <div>
        {/* Button to increment secondCounter by 1 */}
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          Increment Counter 2
        </button>

        {/* Button to decrement secondCounter by 1 */}
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrement Counter 2
        </button>
      </div>

      {/* Button to reset state to initial state */}
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo; // Exporting CounterTwo component as default
