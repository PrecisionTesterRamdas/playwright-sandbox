"use strict";
/*
🔹 Task
Reverse the order of words in a sentence, but keep each word’s characters intact.

🔹 Example
Input:

text
Hello World from TypeScript
Output:

text
TypeScript from World Hello
🔹 Hints
You don’t need to reverse characters this time, only the word order.

Think about splitting the sentence into words, then processing them in reverse order.

You can either:

Use a backward loop, or

Use array methods like .reverse() (if allowed).

🔹 Step Plan
Split the sentence into an array of words.

Reverse the order of the array (loop manually or use .reverse()).

Join the words back into a single string with spaces.

Return the result.
*/
const reverseOrderSentence = (sentence) => {
    let reverseOrderedSentence = "";
    let words = sentence.split(" ");
    for (let word of words) {
        reverseOrderedSentence = `${word} ${reverseOrderedSentence}`;
    }
    return reverseOrderedSentence.trim();
};
console.log(reverseOrderSentence("I'm a software tester"));
