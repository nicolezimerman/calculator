import { useState } from "react";
import "./App.css";
const NUMBERS = Array.from({ length: 10 }, (_, index) => index);
const OPERATORS = ["+", "-", "x", "/"];
import calc from "./helpers/math";

function App() {
  const [actualValue, setActualValue] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  // o null?
  const [total, setTotal] = useState(null);
  const [operator, setOperator] = useState(null);

  //Create Flag to see what was the last movement?
  const [lastMovement, setLastMovement] = useState(null);

  //useCallback?
  const handleClickNumber = (num) => {
    setActualValue((prevValue) => {
      if (prevValue === 0) {
        return num;
      }
      return Number(`${prevValue}${num}`);
    });
    setLastMovement("number");
  };

  const handleClickOperator = (selectedOperator) => {
    if (operator !== null) {
      const newSubTotal = calc(subTotal, actualValue, operator);
      setSubTotal(newSubTotal);
      setTotal(null);
    } else {
      setSubTotal(actualValue);
    }
    setOperator(selectedOperator);
    setActualValue(0);
    setLastMovement("operator");
  };

  const handleClickTotal = () => {
    const result = calc(subTotal, actualValue, operator);
    setTotal(result);
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
