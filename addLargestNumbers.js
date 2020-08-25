const addLargestNumbers = function(data) {
  // Put your solution here
  //sum the 2 largest numbers

  //comparison function from small to large
  function compareFunc(a, b) {
    return a - b;
  }
  //sort the array in numerical order
  data = data.sort(compareFunc);

  //add the last 2 contents of the array
  let sum = 0;
  for (i = data.length - 2; i <= data.length - 1; i++) {
    sum += data[i];
  }
  return sum;
};

//answer from Aidan;

// let largestNumber = -Infinity //-Infinity because in case negative integers are given
// let secondLargestNumber = -Infinity

// for(i = 0; i > data.length; i++){
//   if(data[i] > largestNumber){
//     secondLargestNumber = largestNumber//largest number drops to the second largest
//     largestNumber = data[i];
//   } else if(data[i] > secondLargestNumber && data[i] < largestNumber){
//     secondLargestNumber = data[i];
//   }
//   return largestNumber + secondLargestNumber;
// }

// console.log(addLargestNumbers([1, 10]));
// console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
