// Problem: Find the Second Largest Number
// Write a function that takes an array of numbers and returns the second largest number in the array. If the array has fewer than two unique numbers, return null.

// Example:

// findSecondLargest([3, 5, 1, 8, 2]); // 5
// findSecondLargest([10, 10, 10]); // null
// findSecondLargest([1, 2, 3, 4, 5]); // 4
// findSecondLargest([7]); // null
// Requirements:
// Create a function named findSecondLargest.
// The function should accept a single array of numbers as a parameter.
// It should return the second largest number or null if there are not enough unique numbers.
// Constraints:
// The input array may contain duplicate numbers.

function findSecondLargest(array) {

    let numbers = array.sort((a, b) => { b - a });
    numbers = numbers.reverse()[1];  // the array here will be [8,7,6,5..]
    return numbers;
};

console.log(findSecondLargest([1, 2, 3, 5, 6, 7, 8]));

