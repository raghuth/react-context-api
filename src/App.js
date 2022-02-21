import React, { useState } from "react";
import "./App.css";
import Login from "./login";
import Profile from "./profIle";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Context API Login</h1>
      </header>
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
      <Profile />
    </div>
  );
}

export default App;
