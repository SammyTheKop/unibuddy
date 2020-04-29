// react
import React, { useState, useRef, useEffect } from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

// styles
import "./textbox.css";

/**
 * @name Textbox
 * @description Text Suggestion React Component
 * @param className
 * @param children
 * @param readOnly
 * @param value
 * @param handleChange
 * @param handleClearValue
 * @param type
 * @param ariaLabel
 * @param isRequired
 * @param canClear
 * @param placeHolder
 * @param props (Extra)
 * @returns TextSuggestion Component
 */
const Textbox = ({
  classname,
  children,
  readOnly,
  value,
  handleChange,
  handleClearValue,
  type,
  ariaLabel,
  isRequired,
  canClear,
  placeHolder,
  ...props
}) => {
  // state constant to maintain the text value
  const [textValue, setTextValue] = useState(value);

  // react ref to identify the textinput Dom element
  const textInput = useRef(null);

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
   * @name updateTextValue
   * @description handles the textbox events and updates the data in state
   * @param e
   * @returns none
   */
  const updateTextValue = (e) => {
    setTextValue(e.target.value);
    handleChange(e);
  };

  /**
   * @name clearField
   * @description removes the data from the text input
   * @param none
   * @returns none
   */
  const clearField = () => {
    setTextValue("");
    handleClearValue();
    textInput.current.focus();
  };

  return (
    <div
      className={classnames(classname, "textbox-component", {
        disabled: readOnly,
      })}
    >
      <input
        type={type}
        value={textValue}
        onChange={updateTextValue}
        readOnly={readOnly}
        aria-label={ariaLabel}
        required={isRequired}
        aria-required={isRequired}
        placeholder={placeHolder}
        data-testid="textbox"
        ref={textInput}
        className={classnames(
          { disabled: readOnly },
          { "textbox-component-disabled": readOnly }
        )}
        {...props}
      />
      {canClear && !readOnly && textValue.length > 0 && (
        <div
          className="clear"
          role="button"
          tabIndex="0"
          aria-pressed="false"
          aria-label="clear-textbox"
          aria-labelledby="clear-texttbox"
          onClick={clearField}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              clearField(e);
            }
          }}
          data-testid="clear-textbox"
        >
          <span className="clear__icon">&times;</span>
        </div>
      )}
      {children}
    </div>
  );
};

Textbox.propTypes = {
  children: node,
  handleChange: func,
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

Textbox.defaultProps = {
  children: null,
  handleChange: () => {},
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

export default Textbox;
