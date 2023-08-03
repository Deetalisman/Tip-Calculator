import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handlReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How do you like our service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        {" "}
        How do you your friend like our service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handlReset={handlReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div className="rate">
      <p>How much was the bill?</p>{" "}
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="rate">
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">it was okay(5%)</option>
        <option value="10">it was good(10%)</option>
        <option value="20">Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h1>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}
function Reset({ handlReset }) {
  return <button onClick={handlReset}>Reset</button>;
}
