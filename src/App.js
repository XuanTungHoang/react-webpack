import React from "react";
import "./App.css";

export default class App extends React.Component {
  render() {
    console.log("make change");
    return (
      <>
        <div className="App">hello webpack</div>;
        <img src="../assets/cat.jpg" />
      </>
    );
  }
}
