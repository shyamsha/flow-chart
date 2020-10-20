import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MultiSelect from "./components/MultiSelect";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MultiSelect/>
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<Main />, App);
