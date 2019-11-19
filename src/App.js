import React, { Component } from "react";
import Main from "./Sections/Main/Main";
import Maps from "./Sections/Maps/Maps";
import AdminRoute from "./Sections/AdminRoute/AdminRoute";
import TermAndCondition from "./Sections/TaCSection/TaC";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MakeAdmin from "./Sections/MakeAdmin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/maps/" component={Maps} />
            <Route path="/admin/" component={AdminRoute} />
            <Route path="/makeadmin/" component={MakeAdmin} />
            <Route path="/TaC/" component={TermAndCondition}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
