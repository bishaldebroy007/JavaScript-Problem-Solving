// Problem: Count the Number of Words
// Write a function that takes a string as input and returns the number of words in that string. A word is defined as any sequence of characters separated by spaces.

// Example:

// countWords("Hello world!"); // 2
// countWords("This is a test."); // 4
// countWords("   Leading and trailing spaces   "); // 5
// countWords(""); // 0
// Requirements:
// Create a function named countWords.
// The function should accept a single string parameter.
// It should return the number of words in the string.
// Constraints:
// Consider multiple spaces between words and leading/trailing spaces.

const countWords = (word) => {
    const arrayWords = word.split(" "); // it is a array.

    let count = 0;
    for (i = 0; i < arrayWords.length; i++) {
        count++;
    };
    return `Total number of words here is: ${count}`;
};

console.log(countWords("I am here for your help brother"));