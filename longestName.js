// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  // Put your solution here
  let fullName = instructors.first + instructors.last;
  return fullName;
};

console.log(
  LongestName([
    { first: "Samuel", last: "Sanderson" },
    { first: "Jeremiah", last: "Web" },
    { first: "Ophilia", last: "Rich" },
    { first: "Donald", last: "kant" }
  ])
);
// console.log(
//   LongestName([
//     { first: "Matthew", last: "Ebert" },
//     { first: "David", last: "John" },
//     { first: "Domascus", last: "Anderson" }
//   ])
// );
