import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ContactList from "./components/ContactList";

const contacts = [
  { id: 1, name: "Yarden Nagel" },
  { id: 2, name: "Jeanne Marker" },
  { id: 3, name: "Liam Nageiss" },
  { id: 4, name: "Eli Nakar" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact List</h1>
        </header>

        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;