import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing/Routing";
import SidebarNav from "./Shared/Components/SidebarNav/SidebarNav";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main-panel">
        <SidebarNav>
          <Routing />
        </SidebarNav>
      </div>
    </BrowserRouter>
  );
};

export default App;
