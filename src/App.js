import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3001/api/getUsername")
      .then((res) => res.json())
      .then((user) => setUserName(user.username));
  }, []);

  const [username, setUserName] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from Render!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {username}
        </a>
      </header>
    </div>
  );
};

export default App;
