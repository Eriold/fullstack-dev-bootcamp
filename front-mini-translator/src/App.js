import React from "react";
import TextLeft from "./components/TextLeft";
// import TextRight from "./components/TextRight";
import MainLayout from "./layout/MainLayout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainLayout></MainLayout>
      <TextLeft></TextLeft>
      {/* <TextRight></TextRight> */}
    </div>
  );
}

export default App;
