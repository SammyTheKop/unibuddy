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

// error boundary
import ErrorBoundary from "../components/errorBoundary/errorBoundary";

const App = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [totalItems, setTotalItems] = useState([]);
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    if (text) {
      setTotalItems([...totalItems, selectedItem]);
    }
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
              <div className="App-cards-contents">
                <p>{item.title}</p>
                <p>Written By: {item.author.author}</p>
                <p>{`${item.summary.slice(0, 100)}...`}</p>
              </div>
            </Card>
          );
        })}
      </>
    );
  };

  const getEmptyCard = () => {
    return (
      <Card classname="card-component-background-4 text-center">
        No Books Selected
      </Card>
    );
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <form>
          <div className="App-search-bar">
            <TextSuggestion
              placeHolder="Name of the Book"
              handlesuggestions={(e) => handleSuggestions(e)}
              setText={setText}
              canClear={false}
            />
            <Button handleclick={handleButtonClick}>Add Books</Button>
          </div>
        </form>
        {totalItems.length > 0 ? (
          <div className="App-cards">{getBookCards()}</div>
        ) : (
          <div className="App-cards-empty">{getEmptyCard()}</div>
        )}
        <Footer footerText="2020 &copy; Samrat Ghosh" />
      </div>
    </ErrorBoundary>
  );
};

export default App;
