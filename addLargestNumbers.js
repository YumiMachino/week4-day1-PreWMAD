const addLargestNumbers = function(data) {
  // Put your solution here

  let sum = 0;
  for (i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
};

// console.log(addLargestNumbers([1, 10]));
// console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
