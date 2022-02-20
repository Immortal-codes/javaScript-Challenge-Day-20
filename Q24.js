//Write a JavaScript program to dcapitalize the first letter of a string.

//#Source https://bit.ly/2neWfJ2 
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
console.log(decapitalize('W3resource'))
console.log(decapitalize('Red', true));
