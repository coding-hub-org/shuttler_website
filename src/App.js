import React, { Component } from "react";
import Main from "./Sections/Main/Main";
import Maps from "./Sections/Maps/Maps";
import AdminRoute from "./Sections/AdminRoute/AdminRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/maps/" component={Maps} />
            <Route path="/admin/" component={AdminRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
