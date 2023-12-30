import React from "react";
import './styles/global.scss'
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";
function App() {
  return (
    <div className="main-border">
    <div className="main-panel">
      <Routing />
    </div>
    </div>
  );
}

export default App;
