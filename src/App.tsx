import logo from "./logo.svg";
import React from 'react';
import './App.css';
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
        <Card >
        <Tag statusText="High" />
        </Card>
      </header>
    </div>
  );
}

export default App;
