import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  // handleClick = buttonName => {
  //   this.setState(calculate(this.state, buttonName));
  // };

  render() {
    return (
      <Router>
        <div className="component-app">
          <Header/>
          <Footer/>
        </div>
      </Router>
    );
  }
}
