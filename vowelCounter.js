// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  // Put your solution here
  //using counter??
  let dataArray = data.split("");
  // console.log(dataArray.length);
  let vowelCounter = 0;

  for (n = 0; n < dataArray.length; n++) {
    if (dataArray[n] === "a") {
      vowelCounter += 1;
    } else if (dataArray[n] === "e") {
      vowelCounter += 1;
    } else if (dataArray[n] === "i") {
      vowelCounter += 1;
    } else if (dataArray[n] === "o") {
      vowelCounter += 1;
    } else if (dataArray[n] === "u") {
      vowelCounter += 1;
    } else {
      vowelCounter = vowelCounter;
    }
  }
  return vowelCounter;
};

// console.log(vowelCounter("orange"));
// console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));
