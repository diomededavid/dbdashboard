import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tag/>
        <Card title="Title" description="description"/>
      </header>
    </div>
  );
}

export default App;
