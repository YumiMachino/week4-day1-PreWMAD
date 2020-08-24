// write a function that returns the sum of all the numbers that are either 'even', or 'odd'

const conditionalAdding = function(values, condition) {
  // Your code here
  let sum = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        sum += values[i];
      } else {
        sum = sum;
      }
    } else if (condition === "odd") {
      if (values[i] % 2 !== 0) {
        sum += values[i];
      } else {
        sum = sum;
      }
    }
  }
  return sum;
};

// console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
// console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
console.log(conditionalAdding([], "odd"));
