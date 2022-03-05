import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Tag from "./components/Tag";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <header className="App-header">
        <Card title="Title" description="description" />
        <Tag statusText="High" />
      </header>
    </div>
  );
}

export default App;
