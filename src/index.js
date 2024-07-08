import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

function App() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(null);

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);

  function countplus() {
    setCount((c) => c + 1 * step);
  }
  function countminus() {
    setCount((c) => c - 1 * step);
  }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="RangeSlider">
          <p>Step: {step}</p>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
          />
        </div>
        <div className="Counter">
          <button onClick={countminus}>-</button>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(
                Number(e.target.value) === 0 ? null : Number(e.target.value)
              );
            }}
          />
          <button onClick={countplus}>+</button>
        </div>
        <p className="DateDisplay">
          {count > 0 && `${count} days from today is  ${date.toDateString()}`}
          {count < 0 &&
            `${Math.abs(count)} days ago was  ${date.toDateString()}`}
          {count === 0 && `Today is  ${date.toDateString()}`}
        </p>
        {step !== 1 || count !== 0 ? (
          <button className="ResetButton" onClick={reset}>
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
