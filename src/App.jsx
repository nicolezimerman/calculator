import "./App.css";
const NUMBERS = Array.from({ length: 10 }, (_, index) => index);
const SYMBOLS = ["+", "-", "x", "/", "="];

function App() {
  return (
    <>
      <main className="calculator">
        <section className="result">1000</section>
        <section className="numbers">
          {NUMBERS.map((num) => (
            <button key={num}>{num}</button>
          ))}
        </section>
        <section className="symbols">
          {SYMBOLS.map((symbol) => (
            <button key={symbol}>{symbol}</button>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
