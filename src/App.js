import React from "react";
import Toppings from "./components/Toppings";
import "./App.css";

class App extends React.Component {
  state = {
    toppings: [
      {
        id: 1,
        ingredient: "nuts",
        added: false
      },
      {
        id: 2,
        ingredient: "oreos",
        added: false
      },
      {
        id: 3,
        ingredient: "reeses",
        added: false
      },
      {
        id: 4,
        ingredient: "gummibears",
        added: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Yummy toppings</h1>
      </div>
    );
  }
}

export default App;
