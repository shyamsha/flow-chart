import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<Main />, App);
