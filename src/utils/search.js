/**
 * Search Utility Function JS File
 */

// fetches the data from mockdata.js file
const mockData = require("../mockData/mockData");

/**
 * @name searchUtility
 * @description function takes the text parameter and searches the mock data summary array of object to find a match and adds them in the array based on that
 * @param {*} text
 * @returns finalResult (an array of objects which has the details of the item that matches)
 */
const searchUtility = (text, count) => {
  // destructing the data
  const { data } = mockData;

  // variable to check the string match count in the loop
  let stringMatchCount = 0;

  // array to store the final array of objects
  let finalResult = [];

  // array to store the dummy data that can be passed when the results do not match
  const dummyData = [];

  // for each loop to iterate the summary array of objects
  data.summaries.forEach((item, index) => {
    if (stringMatchCount < count) {
      const { id, summary } = item;
      let value = summary.search(text);

      if (!(value === -1)) {
        if (finalResult.length < count) {
          stringMatchCount++;
          finalResult.push({
            id,
            summary,
            title: data.titles[index],
            author: data.authors[index],
          });
        }
      } else {
        if (dummyData.length < count) {
          dummyData.push({
            id,
            summary,
            title: data.titles[index],
            author: data.authors[index],
          });
        }
      }
    }
  });

  if (finalResult.length === count) {
    return finalResult;
  }

  if (finalResult.length < count) {
    let remainingItemCount = count - stringMatchCount;
    finalResult = [...finalResult, ...dummyData.slice(0, remainingItemCount)];
    return finalResult;
  }
};

// exporting the Search Utility Functon that can be resused
module.exports = {
  searchUtility,
};
