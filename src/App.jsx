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
      </main>
    </div>
  );
}

export default App;
