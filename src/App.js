import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignPage from "./Register/SignPage";
import "antd/dist/antd.css";
import Register from "./Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign" component={SignPage} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
    // <div style={{ color: "black" }}>hy</div>
  );
};

export default App;
