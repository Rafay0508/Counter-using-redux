import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./store/counterSlice";

function App() {
  const [value, setValue] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "15%",
      }}
    >
      <h1>Counter Using Redux Toolkit</h1>
      <div style={{ margin: "10px" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span style={{ margin: "20px 20px 20px 20px", fontSize: "25px" }}>
          {count}
        </span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(value));
          }}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default App;
