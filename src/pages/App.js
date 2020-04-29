// react
import React from "react";

// components
import Button from "../components/button/button";
import Card from "../components/card/card";

// styles
import "./App.css";

const App = () => {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card>
        <Button handleclick={handleButtonClick}>Test</Button>
      </Card>
    </div>
  );
};

export default App;
