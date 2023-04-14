import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <main>
        <h1 data-testid="main-content">Main content</h1>
        <span data-testid="main-count">{count}</span>
        <button
          data-testid="main-button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </main>
    </div>
  );
}

export default App;
