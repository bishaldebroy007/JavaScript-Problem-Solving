// Problem: Find the Minimum and Maximum in an Array
// Write a function that takes an array of numbers as input and returns an object containing the minimum and maximum values from the array.

// Example:

// findMinMax([3, 5, 1, 8, 2]); // { min: 1, max: 8 }
// findMinMax([-1, -5, -3, -4]); // { min: -5, max: -1 }
// findMinMax([7]); // { min: 7, max: 7 }
// Requirements:
// Create a function named findMinMax.
// The function should accept a single array of numbers as a parameter.
// It should return an object with two properties: min and max.


const findMinMax = (givenArray) => {
    let maxValue = Math.max(...givenArray);
    let minValue = Math.min(...givenArray);

    return `Max Value: ${maxValue}, Min Value: ${minValue}`;
}

console.log(findMinMax([4, 5, 2, 6, 7]));