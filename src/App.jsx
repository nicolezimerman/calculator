import "./App.css";
const NUMBERS = Array.from({ length: 10 }, (_, index) => index);
const OPERATORS = ["+", "-", "x", "/"];
import useMath from "./hooks/useMath";

function App() {
  const {
    showSubTotal,
    showTotal,
    onClickNumber,
    onClickPoint,
    onClickOperator,
    onClickTotal,
    clearAll,
  } = useMath();

  return (
    <>
      <main className="calculator">
        <section className="result">
          <div className="subtotal">{showSubTotal}</div>
          <div className="total">{showTotal}</div>
        </section>
        <section className="numbers">
          {NUMBERS.map((num) => (
            <button onClick={(event) => onClickNumber(num)} key={num}>
              {num}
            </button>
          ))}
          <button onClick={onClickPoint}>.</button>
        </section>
        <section className="symbols">
          {OPERATORS.map((operator) => (
            <button
              onClick={(event) => onClickOperator(operator)}
              key={operator}
            >
              {operator}
            </button>
          ))}
          <button onClick={onClickTotal}>=</button>
          <button onClick={clearAll}>CE</button>
        </section>
      </main>
    </>
  );
}

export default App;
