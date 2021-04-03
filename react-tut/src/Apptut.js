import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";


class Apptut extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
            <Counters></Counters>

        </main>
        </React.Fragment>
    );
  }
}

export default Apptut;
