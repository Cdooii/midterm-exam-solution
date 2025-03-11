/*
JavaScript Fundamentals
Write a JavaScript function named countProperties that takes an object as an argument and returns the number of properties in the object.
Example: countProperties({ a: 1, b: 2, c: 3 }) should return 3.
Hint: Use Object.keys() to get an array of property names.
 */

function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 }));
