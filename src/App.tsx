import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Sidebar />
      <header className="App-header">
        <Card>Test</Card>
      </header>
    </div>
  );
}

export default App;
