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
      <div className="App-search-bar">
        <Button handleclick={handleButtonClick}>Test</Button>
        <Textbox
          handleChange={(e) => handleTextboxChange(e.target.value)}
          placeholder="This is a Nacho Style Textbox"
        />
      </div>
    </div>
  );
};

export default App;
