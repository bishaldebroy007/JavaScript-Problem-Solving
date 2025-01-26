// Problem: Merge Two Sorted Arrays
// Write a function that takes two sorted arrays as input and merges them into a single sorted array. The resulting array should also be sorted.

// Example:

// javascript

// Copy Code
// mergeSortedArrays([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
// mergeSortedArrays([1, 2, 3], []); // [1, 2, 3]
// mergeSortedArrays([], [4, 5, 6]); // [4, 5, 6]
// mergeSortedArrays([], []); // []
// Requirements:
// Create a function named mergeSortedArrays.
// The function should accept two sorted arrays as parameters.
// It should return a new array that contains all elements from both input arrays, sorted.

const mergeSortedArrays = (array1, array2) => {

    let resultingArray = array1.concat(array2);
    resultingArray = resultingArray.sort((a, b) => { a - b });

    return resultingArray;
};

const result = mergeSortedArrays([1, 3, 5], [2, 4, 6]);

console.log(result);