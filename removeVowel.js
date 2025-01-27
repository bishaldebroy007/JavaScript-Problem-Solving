// Problem: Remove Vowels from a String
// Write a function that takes a string as input and returns a new string with all the vowels (a, e, i, o, u) removed. The function should be case-insensitive, meaning it should remove both uppercase and lowercase vowels.


// Copy Code
// removeVowels("Hello World"); // "Hll Wrld"
// removeVowels("JavaScript is fun!"); // "JvScrpt s fn!"
// removeVowels("AEIOU"); // ""
// Requirements:
// Create a function named removeVowels.
// The function should accept a single string parameter.
// It should return a new string with all vowels removed.

const removeVowels = (string) => {
    let takenString = string.toLowerCase();
    let newString = "";

    for (let i = 0; i < takenString.length; i++) {

        if (takenString[i] !== "a" && takenString[i] !== "e" && takenString[i] !== "i" && takenString[i] !== "o" && takenString[i] !== "u") {
            // newString.replace(string[i], "");
            newString += takenString[i];
        };


        // if (string[i] !== "a" && string[i] !== "e" && string[i] !== "i" &&
        //     string[i] !== "o" && string[i] !== "u" &&
        //     string[i] !== "A" && string[i] !== "E" && string[i] !== "I" &&
        //     string[i] !== "O" && string[i] !== "U") {
        //     newString += string[i]; // Append the character to newString
        // }
    }

    return newString; // Return the new string without vowels
};

// Example usage
console.log(removeVowels("I am a good person and I will help you")); 