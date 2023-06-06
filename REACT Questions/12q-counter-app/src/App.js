import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <h1 style={{marginTop: "50px", color: "#B9345A", fontSize: "50px"}}>A simple counter app using React.
</h1>
      </header>
      <h2 style={{marginTop: "100px", fontSize: "30px", color: "#8D3DAF"}}>Current value of the counter is : {counter}</h2>
      <div className="btn">
      <button onClick={() => setCounter(counter - 1)}>Decrease Counter</button>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter
      </button>
      </div>
      <button onClick={() => setCounter(0)} style={{backgroundColor: "#03C6C7"}}>Reset Counter</button>
    </div>
  );
}

export default App;
