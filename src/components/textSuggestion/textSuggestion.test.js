import React, { useState } from "react";

// component
import TextSuggestion from "./textSuggestion";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Case 1: TextSuggestion Renders properly or not
it("Case 1: Textbox Component Renders Correctly or not", () => {
  const handleSuggestions = (event) => {
    console.log(event);
  };

  const buttonComponentTree = renderer
    .create(
      <TextSuggestion
        placeHolder="This is a Nacho Style Textbox"
        handlesuggestions={(e) => handleSuggestions(e)}
      />
    )
    .toJSON();
  expect(buttonComponentTree).toMatchSnapshot();
});

/**
 * @name TestComponent
 * @details use case of textsuggestion component
 * @returns button component with the updated count
 */
const TestComponent = () => {
  const [value, setValue] = useState("Test");

  const handleSuggestions = (inputText) => {
    setValue(inputText);
  };

  return (
    <TextSuggestion
      handlesuggestions={(e) => handleSuggestions(e)}
      placeholder="This is a Nacho Style Textbox"
    >
      {value}
    </TextSuggestion>
  );
};

/**
 * @name setup
 * @details renders and identifies the input field from the test suggestion component
 * @returns input
 */
const setup = () => {
  const utils = render(<TestComponent />);
  const input = utils.getByLabelText("textbox");
  return {
    input,
    ...utils,
  };
};

// Case 2: Checks the value of the textSuggestion component
it("Case 2: Checks the value of the textSuggestion component", () => {
  const { input } = setup();
  fireEvent.change(input, {
    target: { value: "I love JavaScript" },
  });
  expect(input.value).toBe("I love JavaScript");
});

it("Case 3: Checks the value of the textSuggestion component on click", () => {
  const { input } = setup();
  fireEvent.click(input, { target: { value: "I love JavaScript" } });
  expect(input.value).toBe("I love JavaScript");
});

afterEach(cleanup);
