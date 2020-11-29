import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../src/App";
import reportWebVitals from "./reportWebVitals";

import { Route, IndexRoute, Router, browserHistory } from "react-router";
import Search from "./Components/Search/Search";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/search" component={Search} />
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
