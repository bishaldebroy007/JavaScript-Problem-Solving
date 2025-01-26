// Problem: Remove Duplicates from an Array
// Write a function that takes an array of numbers as input and returns a new array with all duplicate numbers removed. The order of the elements in the new array should be the same as the original array.

// Example:

// javascript

// Copy Code
// removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
// removeDuplicates([5, 5, 5, 5, 5]); // [5]
// removeDuplicates([1, 2, 3]); // [1, 2, 3]
// Requirements:
// Create a function named removeDuplicates.
// The function should accept a single array parameter.
// It should return a new array with duplicates removed.

//One way
const removeDuplicates = (array) => {
    let newSet = new Set(array);

    let newArray = [...newSet];   // set to array convertion.
    return newArray;
};
let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log(`One way to remove duplicates: [${result}]`);



//Another way
const removeCopies = (array) => {
    let freshArray = [];

    array.forEach(value => {
        if (!freshArray.includes(value)) {
            freshArray.push(value);
        }
    })
    return freshArray;
};

const result_2 = removeCopies([5, 5, 6, 6, 7]);

console.log(`Another way to remove duplicates: [${result_2}]`);