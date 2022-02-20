//Write a JavaScript program to get every nth element in a given array.

//#Source https://bit.ly/2neWfJ2 
const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 1));
console.log(every_nth([1, 2, 3, 4, 5, 6], 2));
console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
console.log(every_nth([1, 2, 3, 4, 5, 6], 4));
