import React from 'react';import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Tag from "./components/Tag";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <header className="App-header">
        <Card title="Title" description="description"/>
        <Tag statusText="High"/>
      </header>
    </div>
  );
}

export default App;
