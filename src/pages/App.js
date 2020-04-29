// react
import React from "react";

// components
import Button from "../components/button/button";
import Card from "../components/card/card";
import Textbox from "../components/textbox/textbox";

// styles
import "./App.css";

const App = () => {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  const handleTextboxChange = (inputText) => {
    console.log(inputText);
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
        <Textbox
          handleChange={(e) => handleTextboxChange(e.target.value)}
          placeholder="This is a Nacho Style Textbox"
        />
      </Card>
    </div>
  );
};

export default App;
