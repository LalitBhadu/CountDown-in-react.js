import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Timer duration={10 * 24 * 60 * 60 * 1000} />
    </div>
  );
}

export default App;
