// react
import React, { useState } from "react";

// components
import Button from "../components/button/button";
import Card from "../components/card/card";
import TextSuggestion from "../components/textSuggestion/textSuggestion";

// styles
import "./App.css";

const App = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [totalItems, setTotalItems] = useState([]);

  const handleButtonClick = () => {
    setTotalItems([...totalItems, selectedItem]);
  };

  const handleSuggestions = (value) => {
    setSelectedItem(value);
  };

  const getBookCards = () => {
    return (
      <>
        {totalItems.map((item) => {
          return (
            <Card>
              Name: {item.title}
              Id: {item.id}
              Author: {item.Author}
              Description: {item.summary}
            </Card>
          );
        })}
      </>
    );
  };

  return (
    <div className="App">
      <p>Search Books</p>
      <div className="App-search-bar">
        <TextSuggestion
          placeHolder="This is a Nacho Style Textbox"
          handlesuggestions={(e) => handleSuggestions(e)}
        />
        <Button handleclick={handleButtonClick}>Test</Button>
      </div>
      {totalItems.length > 0 && (
        <div className="App-cards">{getBookCards()}</div>
      )}
    </div>
  );
};

export default App;
