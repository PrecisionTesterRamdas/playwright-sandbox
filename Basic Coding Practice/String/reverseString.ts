/*
🔹 Task
Reverse a string in TypeScript without using the built‑in .reverse() method.

🔹 Hints
Strings in JS/TS are immutable, so you can’t swap characters directly.

You’ll need to build a new string step by step.

Think about iterating from the end of the string toward the beginning.

🔹 Step Plan
Initialize an empty result string.

Loop through the original string starting from the last index down to the first.

Append each character to the result string.

Return the result.
*/

function reverseStringModern(str: string): string {
  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverseStringModern("TypeScript"));

function reverseStringOld(str: string): string {
  let reversed: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseStringOld("Ram"));
