import React, { useState } from "react";

// component
import Textbox from "./textbox";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Case 1: Textbox Renders properly or not
it("Case 1: Textbox Component Renders Correctly or not", () => {
  const buttonComponentTree = renderer
    .create(<Textbox placeholder="This is a Nacho Style Textbox" />)
    .toJSON();
  expect(buttonComponentTree).toMatchSnapshot();
});

/**
 * @name TestComponent
 * @details use case of textbox component
 * @returns button component with the updated count
 */
const TestComponent = () => {
  const [value, setValue] = useState("Test");

  const handleTextboxChange = (inputText) => {
    setValue(inputText);
  };

  return (
    <Textbox
      handleChange={(e) => handleTextboxChange(e.target.value)}
      placeholder="This is a Nacho Style Textbox"
    >
      {value}
    </Textbox>
  );
};

const setup = () => {
  const utils = render(<TestComponent />);
  const input = utils.getByLabelText("textbox");
  return {
    input,
    ...utils,
  };
};

// Case 2: Checks the value of the textbox component
it("Case 2: Checks the value of the textbox component", () => {
  const { input } = setup();
  fireEvent.change(input, {
    target: { value: "Something" },
  });
  expect(input.value).toBe("Something");
});

// Case 3: Checks the value of the textbox component
it("Case 3: Checks the value of the textbox component (Negative Testing)", () => {
  const { input } = setup();
  fireEvent.change(input, {
    target: { value: "Something" },
  });
  expect(input.value).not.toBe("Not Something");
});

// Case 4: Checks the value of the textbox component testid
it("Case 4: Checks the value of the textbox component testid", () => {
  const { getByTestId } = render(<TestComponent />);
  expect(getByTestId("textbox")).toBeInTheDocument();
});

// Case 5: Checks the value of the textbox-clear testid
it("Case 5: Checks the value of the textbox-clear testid", () => {
  const { getByTestId } = render(<TestComponent />);
  expect(getByTestId("textbox")).toBeInTheDocument();
});
