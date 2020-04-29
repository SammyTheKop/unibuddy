// react
import React, { useState } from "react";

// components
import Button from "../components/button/button";
import Card from "../components/card/card";
import TextSuggestion from "../components/textSuggestion/textSuggestion";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

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

  const getEmptyCard = () => {
    return (
      <Card classname="card-component-background-4">No Books Selected</Card>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <p>Search Books</p>
      <div className="App-search-bar">
        <TextSuggestion
          placeHolder="Name of the Book"
          handlesuggestions={(e) => handleSuggestions(e)}
        />
        <Button handleclick={handleButtonClick}>Test</Button>
      </div>
      {totalItems.length > 0 ? (
        <div className="App-cards">{getBookCards()}</div>
      ) : (
        <div className="App-cards-empty">{getEmptyCard()}</div>
      )}
      <Footer footerText="2020 &copy; Samrat Ghosh" />
    </div>
  );
};

export default App;
