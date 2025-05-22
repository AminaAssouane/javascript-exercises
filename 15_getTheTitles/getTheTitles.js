const getTheTitles = function (arr) {
  newArr = [];
  arr.forEach((element) => {
    newArr.push(element.title);
  });
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
