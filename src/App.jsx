import { useState } from "react";
import "./App.css";
const NUMBERS = Array.from({ length: 10 }, (_, index) => index);
const OPERATORS = ["+", "-", "x", "/"];
import calc from "./helpers/math";

function App() {
  const [actualValue, setActualValue] = useState("");
  const [subTotal, setSubTotal] = useState("");
  // o null?
  const [total, setTotal] = useState("");
  const [operator, setOperator] = useState("");

  //Create Flag to see what was the last movement?
  const [lastMovement, setLastMovement] = useState(null);

  //useCallback?
  const handleClickNumber = (num) => {
    setActualValue((prevValue) => {
      if (prevValue === "") {
        return num;
      }
      return `${prevValue}${num}`;
    });
    setLastMovement("number");
  };

  const handleClickPoint = () => {
    setActualValue((prevValue) => {
      if (prevValue === "") {
        return "0.";
      } else if (prevValue.includes(".")) {
        return prevValue;
      } else {
        return `${prevValue}.`;
      }
    });
  };

  const handleClickOperator = (selectedOperator) => {
    if (operator !== "") {
      const newSubTotal = calc(subTotal, actualValue, operator);
      setSubTotal(newSubTotal.toFixed(2));
      setTotal("");
    } else {
      setSubTotal(actualValue);
    }
    setOperator(selectedOperator);
    setActualValue("");
    setLastMovement("operator");
  };

  const handleClickTotal = () => {
    const result = calc(subTotal, actualValue, operator);

    setTotal(result.toFixed(2));
    setLastMovement("total");
  };

  return (
    <>
      <main className="calculator">
        <section className="result">
          <div className="subtotal">
            {subTotal} {operator} {total && `${actualValue} =`}
          </div>
          <div className="total">
            {lastMovement === "total"
              ? total
              : lastMovement === "operator"
              ? subTotal
              : actualValue}
          </div>
        </section>
        <section className="numbers">
          {NUMBERS.map((num) => (
            <button onClick={(event) => handleClickNumber(num)} key={num}>
              {num}
            </button>
          ))}
          <button onClick={handleClickPoint}>.</button>
        </section>
        <section className="symbols">
          {OPERATORS.map((operator) => (
            <button
              onClick={(event) => handleClickOperator(operator)}
              key={operator}
            >
              {operator}
            </button>
          ))}
          <button onClick={handleClickTotal}>=</button>
        </section>
      </main>
    </>
  );
}

export default App;
