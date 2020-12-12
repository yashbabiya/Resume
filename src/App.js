import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import "./styles.css";
import Home from "./Home";
import About from "./About";
export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
