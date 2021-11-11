import "./styles.css";
import React, { useState } from "react";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [add, setAdd] = useState(number1 + number2);
  const [sub, setSub] = useState(number1 + number2);
  const [product, setProduct] = useState(number1 + number2);
  const [divide, setDivide] = useState(number1 + number2);

  function addNumber() {
    setAdd(number1 + number2);
  }

  function subNumber() {
    setAdd(number1 - number2);
  }

  function productNumber() {
    setAdd(number1 * number2);
  }

  function divideNumber() {
    setAdd(number1 / number2);
  }
  return (
    <div className="App">
      <div>
        <h1> Let's Calculate </h1>
        <label>
          Input 1
          <input
            type="number"
            placeholder="Enter the first number"
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
            min="0"
          />
        </label>
      </div>
      <div>
        <label>
          Input 2
          <input
            type="number"
            placeholder="Enter the second number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
            min="0"
          />
        </label>
      </div>
      <button className="btn1" onClick={addNumber}>
        {" "}
        Add
      </button>
      <button className="btn2" onClick={subNumber}>
        Sub
      </button>
      <button className="btn3" onClick={productNumber}>
        Multiply
      </button>
      <button className="btn4" onClick={divideNumber}>
        Divide
      </button>

      <h2>Your Result 👉🏽: {add}</h2>
    </div>
  );
}

export default App;
