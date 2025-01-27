// Problem: Find the Longest Word
// Write a function that takes a string of words and returns the longest word in the string. If there are multiple words of the same maximum length, return the first one encountered.


// Copy Code
// findLongestWord("The quick brown fox jumped over the lazy dog"); // "jumped"
// findLongestWord("I love programming"); // "programming"
// findLongestWord("Hello world"); // "Hello"
// Requirements:
// Create a function named findLongestWord.
// The function should accept a single string parameter.
// It should return the longest word in the string.
// Constraints:
// Consider words to be separated by spaces.

function findLongestWord(string) {
    let storing = string.split(" "); // an array is stored
    // console.log(storing);

    let longest = storing.sort((a, b) => {
        return (b.length - a.length);
    });
    return longest[0]; // longest. If smallest: 
};

console.log(findLongestWord("I am the best person in the room"));
