import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Sections/Main/Main";
import Maps from "./Sections/Maps/Maps";
import AdminRoute from "./Sections/AdminRoute/AdminRoute";
import MakeAdmin from "./Sections/MakeAdmin";
import TermAndCondition from "./Sections/TaCSection/TaC";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/maps/" Component={Maps} />
            <Route path="/admin/" Component={AdminRoute} />
            <Route path="/makeadmin/" Component={MakeAdmin} />
            <Route path="/TaC/" Component={TermAndCondition}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
