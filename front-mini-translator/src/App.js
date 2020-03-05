import React from "react";
import TextLeft from "./components/TextLeft";
import TextRight from "./components/TextRight";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TextLeft></TextLeft>
      <TextRight></TextRight>
      <button>Translate</button>
    </div>
  );
}

export default App;
