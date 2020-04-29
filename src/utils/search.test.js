/**
 * Testing the Search Utility Function using Jest
 */

// loading the file that contains the utility function
const search = require("./search");

// operation to validate the test cases
const validation = require("./operations");

// assert module
const assert = require("assert");

// Case 1: Check the number of items returned by the utility function is Same
it("Case 1: Check the number of items returned by the utility function is NOT SAME as one", () => {
  let value = search.searchUtility("The Book in Three Sentences", 1);
  assert.equal(validation.countNumberOfObjectsInArray(value), 1);
});

// Case 2: Check the number of items returned by the utility function is SAME as two as the count passed
it("Case 2: Check the number of items returned by the utility function is SAME as two", () => {
  let value = search.searchUtility("What", 2);
  assert.equal(validation.countNumberOfObjectsInArray(value), 2);
});

// Case 2: Check the number of items returned by the utility function is SAME as three as the count passed
it("Case 3: Check the number of items returned by the utility function is SAME as three", () => {
  let value = search.searchUtility("What", 3);
  assert.equal(validation.countNumberOfObjectsInArray(value), 3);
});

// Case 3: Check the items returned by the utility function has Id, Summary, Title, Author
it("Case 4: Check the items returned by the utility function has Id, Summary, Title, Author", () => {
  let value = search.searchUtility("Everything in life is an invention.", 3);
  assert.equal(validation.checkObjectContainsIdSummaryOrNot(value), true);
});

// Case 5: Check the items returned by the utility function doesn't have Id, Summary, Title, Author
it("Case 4: Check the items returned by the utility function doesn't have Id, Summary, Title, Author", () => {
  let value = search.searchUtility("I love JavaScript!", 3);
  assert.equal(validation.checkObjectContainsIdSummaryOrNot(value), true);
});
