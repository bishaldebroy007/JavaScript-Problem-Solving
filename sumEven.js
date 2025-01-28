// Problem: Sum of All Even Numbers
// Write a function that takes an array of numbers and returns the sum of all the even numbers in that array.

// Example:

// sumOfEvenNumbers([1, 2, 3, 4, 5]); // 6 (2 + 4)
// sumOfEvenNumbers([10, 15, 20, 25]); // 30 (10 + 20)
// sumOfEvenNumbers([1, 3, 5]); // 0
// sumOfEvenNumbers([]); // 0
// Requirements:
// Create a function named sumOfEvenNumbers.
// The function should accept a single array of numbers as a parameter.
// It should return the sum of all even numbers in the array.
// Constraints:
// The input array may contain both positive and negative numbers.

const sumOfEvenNumbers1 = (array) => {
    let count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count += array[i];
        } else {
            continue;
        };
    };
    return `One way of doing this is: ${count}`;
};

console.log(sumOfEvenNumbers1([1, 2, 3, 4, 5]));

// const sumOfEvenNumbers2 = (array) => {
//     let count = 0;
//     array.forEach(sumFunction);

//     const sumFunction = (item) => {
//         count += item;
//     };
//     return `Another way of doing this: ${count}`;
// };

// console.log(sumOfEvenNumbers2([1, 2, 3, 4, 5, 100, 98]));
