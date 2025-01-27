// Problem: Palindrome Checker
// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// Example:


// isPalindrome("A man, a plan, a canal, Panama"); // true
// isPalindrome("racecar"); // true
// isPalindrome("hello"); // false
// isPalindrome("No 'x' in Nixon"); // true
// Requirements:
// Create a function named isPalindrome.
// The function should accept a single string parameter.
// It should return true if the string is a palindrome and false otherwise.
// Constraints:
// Ignore spaces, punctuation, and capitalization when checking for palindromes.

const isPalindrome = (string) => {
    const nString = string.toLowerCase();
    const answer = nString.split("").reverse().join("");

    if (nString === answer) {
        return `${string} is a palindrom`;
    } else {
        return `${string} is not a palindrom`
    }

};

console.log(isPalindrome("eye"));