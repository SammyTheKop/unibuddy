/**
 * Functions to Test the Search Utility Function using Jest
 */

/**
 * @name countNumberOfObjectsInArray
 * @description counts the length of the array and returns the length
 * @param {*} item
 * @returns item.length (number)
 */
const countNumberOfObjectsInArray = (item) => {
  return item.length;
};

/**
 * @name checkObjectContainsIdSummaryOrNot
 * @description checks the array of objects contains Id, summary or not
 * @param {*} item
 * @returns containsId (boolean)
 */
const checkObjectContainsIdSummaryOrNot = (item) => {
  let containsIdAndSummary = false;
  item.forEach((individualItem) => {
    const { id, summary, title, author } = individualItem;
    if (id && summary && title && author) {
      containsIdAndSummary = true;
    } else {
      containsIdAndSummary = false;
    }
  });
  return containsIdAndSummary;
};

// exporting the functions used for validation of the Test Cases
module.exports = {
  countNumberOfObjectsInArray,
  checkObjectContainsIdSummaryOrNot,
};
