// react
import React, { useState, useEffect } from "react";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

// components
import Textbox from "../textbox/textbox";

// styles
import "./textSuggestion.css";

// lodash
import { debounce } from "lodash";

// utils: search function
const search = require("../../utils/search");

/**
 * @name TextSuggestion
 * @description Text Suggestion React Component
 * @param className
 * @param children
 * @param readOnly
 * @param value
 * @param handleSuggestions
 * @param handleClearValue
 * @param type
 * @param ariaLabel
 * @param isRequired
 * @param canClear
 * @param placeHolder
 * @param handleTextChange
 * @param props (Extra)
 * @returns TextSuggestion Component
 */
const TextSuggestion = ({
  className,
  children,
  readOnly,
  value,
  handlesuggestions,
  handleClearValue,
  type,
  ariaLabel,
  isRequired,
  canClear,
  placeHolder,
  setText,
  ...props
}) => {
  // state constant to maintain the text value
  const [textValue, setTextValue] = useState(value);

  // state constant to maintain the Suggestions Data in State
  const [suggestionsData, setSuggestionData] = useState([]);

  // state constant to toggle the display of the suggestions list
  const [showSuggestions, setShowSuggestions] = useState(false);

  /**
   * @name useEffect
   * @description updates the text value in state whenever the value prop changes
   * @param none
   * @returns none
   */
  useEffect(() => {
    if (textValue !== value) {
      setTextValue(value);
    }
  }, [value]);

  /**
   * @name handleChange
   * @description handles the textbox events and updates the data in state
   * @description Debouncing the onChange handler to not run the code too many times
   * @param inputText
   * @returns none
   */
  const handleChange = debounce((inputText) => {
    setTextValue(inputText);
    const data = search.searchUtility(inputText, 3);
    setSuggestionData(data);
    setShowSuggestions(true);
    setText(inputText);
  }, 300);

  /**
   * @name handleSuggestionsClick
   * @description handles the suggestions click events and calls a callback from the parent
   * @param event
   * @param item
   * @returns none
   */
  const handleSuggestionsClick = (event, item) => {
    const { title } = item;
    setTextValue(title);
    handlesuggestions(item);
    setSuggestionData(false);
  };

  /**
   * @name getSuggestionLists
   * @description returns suggestion list JSX based on the conditions
   * @param none
   * @returns none
   */
  const getSuggestionLists = () => {
    let displayClassname = "";
    if (textValue.length !== 0 && showSuggestions) {
      displayClassname = `suggestion-content-buttons--display`;
    } else {
      displayClassname = `suggestion-content-buttons--displayNone`;
    }
    return (
      <>
        {suggestionsData.map((item, index) => {
          const { id, title } = item;

          return (
            <button
              type="button"
              className={`suggestion-content-buttons ${displayClassname}`}
              key={`${id}-${index}`}
              onClick={(event) => handleSuggestionsClick(event, item)}
              data-testid="suggestion-content-button"
              aria-label="suggestion-button"
              aria-labelledby="suggestion-button"
            >
              {title}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div className="text-suggestion">
      <Textbox
        className={className}
        readOnly={readOnly}
        value={textValue}
        handleChange={(e) => handleChange(e.target.value)}
        handleClearValue={handleClearValue}
        type={type}
        ariaLabel={ariaLabel}
        isRequired={isRequired}
        canClear={canClear}
        placeHolder={placeHolder}
        {...props}
      >
        {children}
      </Textbox>
      {suggestionsData.length > 0 && (
        <div className="text-suggestion-content">{getSuggestionLists()}</div>
      )}
    </div>
  );
};

TextSuggestion.propTypes = {
  children: node,
  handlesuggestions: func,
  handleClearValue: func,
  readOnly: bool,
  classname: string,
  value: string,
  type: oneOf(["text", "email", "password"]),
  ariaLabel: string,
  isRequired: bool,
  canClear: bool,
  placeHolder: string,
};

TextSuggestion.defaultProps = {
  children: null,
  handlesuggestions: () => {},
  handleClearValue: () => {},
  readOnly: false,
  classname: "",
  value: "",
  type: "text",
  ariaLabel: "textbox",
  isRequired: false,
  canClear: true,
  placeHolder: "",
};

export default TextSuggestion;
