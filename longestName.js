// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  // Put your solution here
  // console.log(instructors[0].first); //print samuel

  let fullName;
  let fullNameCount = 0;
  let theLongest = 0;
  let theLongestName = ""; //as a string

  for (i = 0; i < instructors.length; i++) {
    fullName = instructors[i].first + instructors[i].last; //combine first and last name
    fullNameCount = fullName.length; //count number of the string

    if (fullNameCount > theLongest) {
      fullNameCount = theLongest;
      theLongestName = instructors[i];
    } else {
      theLongest = theLongest;
      theLongestName = theLongestName;
    }
  }
  return theLongestName;
};

// console.log(
//   LongestName([
//     //instructor[0]
//     { first: "Samuel", last: "Sanderson" },
//     //instructor[1]
//     { first: "Jeremiah", last: "Web" },
//     //instructor[2]
//     { first: "Ophilia", last: "Rich" },
//     //instructor[3]
//     { first: "Donald", last: "kant" }
//   ])
// );
console.log(
  LongestName([
    { first: "Matthew", last: "Ebert" },
    { first: "David", last: "John" },
    { first: "Domascus", last: "Anderson" }
  ])
);
