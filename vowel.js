// Problem: Problem: Count Vowels in a String
// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in that string. The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.

// Example:

// javascript

// Copy Code
// countVowels("Hello World"); // 3
// countVowels("JavaScript is fun!"); // 6
// countVowels("XYZ"); // 0
// Requirements:
// Create a function named countVowels.
// The function should accept a single string parameter.
// It should return the total count of vowels in the string.


// const countVowels = (givenValue) => {

//     let updatedValue = givenValue.toLowerCase();

//     let count = 0;
//     for (index = 0; index < updatedValue.length; index++) {

//         if (updatedValue[index] === "a") {
//             count++;
//         } else if (updatedValue[index] === "e") {
//             count++;
//         } else if (updatedValue[index] === "i") {
//             count++;
//         } else if (updatedValue[index] === "o") {
//             count++;
//         } else if (updatedValue[index] === "u") {
//             count++;
//         } else {
//             break;
//         };
//     };

//     return count;

// };

// console.log(countVowels("I am a good boy"));


const countVowels = (givenValue) => {
    let updatedValue = givenValue.toLowerCase();
    let count = 0;

    for (let index = 0; index < updatedValue.length; index++) {
        if (updatedValue[index] === "a" ||
            updatedValue[index] === "e" ||
            updatedValue[index] === "i" ||
            updatedValue[index] === "o" ||
            updatedValue[index] === "u") {
            count++;
        }
    }

    return count;
};

console.log(countVowels("I am a good boy"));
