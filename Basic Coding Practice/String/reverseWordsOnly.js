"use strict";
/*
🔹 Task
Reverse only the characters inside each word of a sentence, but keep the word order intact.

🔹 Example
Input:

text
Hello World
Output:

text
olleH dlroW
🔹 Hints
You’ll need to split the sentence into words.

Reverse each word individually (using either your modern or old-school approach).

Join the words back together with spaces.

🔹 Step Plan
Split the sentence into an array of words.

Loop through each word.

Reverse the characters of that word (reuse your reverse function).

Collect the reversed words.

Join them back with spaces.
*/
const reverseWordsOnly = (sentence) => {
    let words = sentence.split(" ");
    let reversedSentence = "";
    for (let word of words) {
        let reversedWord = "";
        for (let char of word) {
            reversedWord = char + reversedWord;
        }
        reversedSentence = `${reversedSentence} ${reversedWord}`;
    }
    return reversedSentence.trim();
};
console.log(reverseWordsOnly("Hello World"));
