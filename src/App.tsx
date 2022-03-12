import React from "react";
import "./App.css";
import AvatarGroup from "./components/AvatarGroup";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="flex flex-row min-h-max">
        <main className="grid gap-4 grid-cols-4 py-4 w-10/12 my-2 mx-auto">
          <div className="p-2 bg-gray-100 border-t-purple-200 border-t-4">
            <Card>
              <AvatarGroup>
                <Avatar />
                <Avatar />
                <Avatar />
              </AvatarGroup>
            </Card>
          </div>
          <div className="p-2 bg-gray-100 border-t-orange-200 border-t-4">
            <Card>Card</Card>
          </div>
          <div className="p-2 bg-gray-100 border-t-pink-200 border-t-4">
            <Card>Card</Card>
          </div>
          <div className="p-2 bg-gray-100 border-t-blue-300 border-t-4">
            <Card>Card</Card>
          </div>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
