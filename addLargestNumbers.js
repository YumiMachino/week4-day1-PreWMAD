const addLargestNumbers = function(data) {
  // Put your solution here
  //sum the 2 largest numbers

  function compareFunc(a, b) {
    return a - b;
  }

  data = data.sort(compareFunc);

  let sum = 0;
  for (i = data.length - 2; i <= data.length - 1; i++) {
    sum += data[i];
  }
  return sum;
};

// console.log(addLargestNumbers([1, 10]));
// console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
