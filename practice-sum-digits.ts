// ==========================================
// PRACTICE: Summing a Number's Digits
// ==========================================

// --- STEP 1: Absolute Value ---
// Task: Convert any number (including negative) to a positive number.
function makePositive(num: number): number {
  return Math.abs(num);
}

// Quokka check:
console.log(makePositive(-5));  // Expected: 5
console.log(makePositive(42));  // Expected: 42
console.log(makePositive(-32)); // Expected: 32

// --- STEP 2: Convert Number to Array of Digits ---
// Task: Convert a number into an array of string digits.
// Example: 321 -> ["3", "2", "1"]
function numberToDigitArray(num: number): string[] {
  return String(num).split('')
}
 
// Quokka check:
console.log(numberToDigitArray(123)); // Expected: ["1", "2", "3"]
console.log(numberToDigitArray(99));  // Expected: ["9", "9"]
console.log(numberToDigitArray(5));   // Expected: ["5"]

// --- STEP 3: Sum Array of String Digits ---
// Task: Take an array of string digits and return their total sum as a number.
// Example: ["3", "2", "1"] -> 6
function sumStringArray(arr: string[]): number {
const sum = arr.reduce((acc, current) =>{
 return acc + Number(current); 
},0)
     return sum
  }



// Quokka check:
console.log(sumStringArray(["1", "2", "3"])); // Expected: 6
console.log(sumStringArray(["9", "9"]));      // Expected: 18
console.log(sumStringArray(["5"]));           // Expected: 5

// --- PRACTICE 1: Product of Numbers ---
// Task: Multiply all numbers in the array using .reduce()
// Example: [2, 3, 4] -> 2 * 3 * 4 = 24
function multiplyNumbers(numbers: number[]): number {
  const result = numbers.reduce((acc, current) =>{
    return acc * current
  }, 1)
  return result
}

// Quokka check:
console.log(multiplyNumbers([2, 3, 4])); // Expected: 24
console.log(multiplyNumbers([5, 5]));    // Expected: 25

// --- PRACTICE 2: Total Length of Strings ---
// Task: Calculate total count of characters across all strings.
// Example: ["a", "bb", "ccc"] -> 1 + 2 + 3 = 6
function totalLength(words: string[]): number {
  const result = words.reduce((acc, current) => {
    return acc + current.length
  },0)
  return result
}

// Quokka check:
console.log(totalLength(["apple", "banana"])); // Expected: 11
console.log(totalLength(["a", "bb", "ccc"]));  // Expected: 6

// --- PRACTICE 3: Find Max Number ---
// Task: Find the largest number in the array using .reduce()
// Example: [3, 9, 2] -> 9
function findMax(numbers: number[]): number {
  return numbers.reduce((acc, current) => {
    return acc > current ? acc : current
  })
   
}

// Quokka check:
console.log(findMax([1, 5, 3, 9, 2])); // Expected: 9
console.log(findMax([-10, -5, -20]));  // Expected: -5


// ==========================================
// PRACTICE: Array.prototype.map()
// ==========================================

// --- TASK 1: Double the Numbers ---
// Task: Return a new array where each number is multiplied by 2.
// Example: [10, 20, 30] -> [20, 40, 60]
function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((item) => {
    return item * 2
  })
}

// Quokka check:
console.log(doubleNumbers([1, 2, 3]));    // Expected: [2, 4, 6]
console.log(doubleNumbers([10, 20, 30])); // Expected: [20, 40, 60]

// --- TASK 2: Convert Strings to Numbers ---
// Task: Take an array of string digits and convert each item to a number.
// Example: ["10", "20"] -> [10, 20]
function stringsToNumbers(arr: string[]): number[] {
  return arr.map((item) => {
    return Number(item)
  })
}

// Quokka check:
console.log(stringsToNumbers(["1", "2", "3"]));    // Expected: [1, 2, 3]
console.log(stringsToNumbers(["10", "20", "30"])); // Expected: [10, 20, 30]

// --- TASK 3: Uppercase Words ---
// Task: Convert all strings in the array to uppercase.
// Example: ["hello", "world"] -> ["HELLO", "WORLD"]
function makeUppercase(words: string[]): string[] {
  return words.map((item) => {
    return item.toUpperCase()
  })
}

// Quokka check:
console.log(makeUppercase(["hello", "world"])); // Expected: ["HELLO", "WORLD"]
console.log(makeUppercase(["js", "ts"]));       // Expected: ["JS", "TS"]

// --- TASK 4: Map then Reduce ---
// Task: First convert string digits to numbers using .map(), 
// then sum them using .reduce().
// Example: ["2", "3", "5"] -> [2, 3, 5] -> 10
function mapAndReduceSum(arr: string[]): number {
  const res = arr.map((item) => {
    return Number(item)
  })
  return res.reduce((acc, current) => {
    return acc + current
  })
}

// Quokka check:
console.log(mapAndReduceSum(["1", "2", "3"])); // Expected: 6
console.log(mapAndReduceSum(["10", "20"]));    // Expected: 30

// ==========================================
// PRACTICE: Array.prototype.filter()
// ==========================================

// --- TASK 5: Get Even Numbers ---
// Task: Return a new array with ONLY even numbers.
// Example: [1, 2, 3, 4, 5, 6] -> [2, 4, 6]
function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((item) => {
    return item % 2 == 0
  })
}

// Quokka check:
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25]));   // Expected: [10, 20]

// --- TASK 2: Filter Long Words ---
// Task: Return a new array with words that have MORE than 3 characters.
// Example: ["a", "cat", "banana"] -> ["banana"]
function filterLongWords(words: string[]): string[] {
  return words.filter((item) => {
    return item.length > 3
  })
}

// Quokka check:
console.log(filterLongWords(["a", "cat", "banana", "tree"])); // Expected: ["banana", "tree"]
console.log(filterLongWords(["js", "react", "ts", "node"]));   // Expected: ["react", "node"]

// --- TASK 3: Filter + Map + Reduce ---
// Task: Sum of the squares of all positive numbers.
// Process: [-2, 3, 4] -> keep positive [3, 4] -> square them [9, 16] -> sum them -> 25
function sumOfPositiveSquares(numbers: number[]): number {
  return numbers.filter((item) => item > 0).map((item) => item ** 2).reduce((acc, current) => {
    return acc + current
  })
}

// Quokka check:
console.log(sumOfPositiveSquares([-2, 3, 4]));   // Expected: 25 (3^2 + 4^2 = 9 + 16 = 25)
console.log(sumOfPositiveSquares([1, -4, 7, 12])); // Expected: 194 (1 + 49 + 144 = 194)

// ============================================================================
// PRACTICE: String Manipulation & Array Mapping (Path to Jaden Case)
// ============================================================================

// --- TASK 1: Capitalize First Letter ---
// Task: Take a single word as input, and return it with only its first letter capitalized.
// Hint: Use index [0] and string concatenation.

function capitalizeFirstLetter(word: string): string {
  
  return word[0].toUpperCase() + word.slice(1);
}

// Quokka check:
console.log(capitalizeFirstLetter("typescript")); // Expected: "Typescript"
console.log(capitalizeFirstLetter("hello"));      // Expected: "Hello"

// --- TASK 2: Get Word Tail ---
// Task: Take a word and return all characters except the first one.
// Hint: Use the .slice() method.

function getWordTail(word: string): string {
  // Your code here
  return word.slice(1);
}

// Quokka check:
console.log(getWordTail("typescript")); // Expected: "ypescript"
console.log(getWordTail("code"));       // Expected: "ode"

// --- TASK 3: Capitalize Array of Words ---
// Task: Take an array of words and return a new array where each word has its first letter capitalized.
// Hint: Combine your logic from Task 1 and Task 2 inside a .map() loop.

function capitalizeWordsArray(words: string[]): string[] {
  

  
  return [];
}

// --- TASK 1.1: Get First and Last Elements ---
// Task: Take an array of strings. Return a new string in the format: "First: [first_item], Last: [last_item]".
// Hint: Use index [0] for the first item, and [array.length - 1] for the last item.

function getFirstAndLast(arr: string[]): string {
  
  return `First: ${arr[0]}, Last: ${arr[arr.length - 1]} `;
}

// Quokka check:
console.log(getFirstAndLast(["apple", "banana", "orange"])); // Expected: "First: apple, Last: orange"
console.log(getFirstAndLast(["typescript", "javascript"]));  // Expected: "First: typescript, Last: javascript"


// --- TASK 1.2: Filter Long Words ---
// Task: Take an array of strings. Return a new array containing only words that have more than 3 characters.
// Hint: Create an empty array `const result: string[] = []`. 
// Loop through the input array using a classic `for` loop or `for...of` loop.
// Use `result.push(word)` to add matching words.

function filterLongWords2(arr: string[]): string[] {
 const result: string[] = [];

 for(let i = 0; i < arr.length; i++){
  if(arr[i].length > 3){
    result.push(arr[i])
  }
 }
  return result;
}

// Quokka check:
console.log(filterLongWords2(["app", "banana", "it", "code"])); // Expected: ["banana", "code"]
console.log(filterLongWords2(["ts", "js", "html", "css"]));     // Expected: ["html"]

// --- TASK: Double Numbers Manual ---
// Task: Take an array of numbers. Return a new array where each number is multiplied by 2.
// Hint: Create an empty array `const doubled: number[] = []`.
// Loop through the input array, multiply each number by 2, and .push() it into `doubled`.
// Don't forget to return the correct array at the end!

function doubleNumbersManual(arr: number[]): number[] {
  const result: number[] = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] * 2) 
  }
  return result;
}

// Quokka check:
console.log(doubleNumbersManual([1, 2, 3]));   // Expected: [2, 4, 6]
console.log(doubleNumbersManual([10, 20, 30])); // Expected: [20, 40, 60]

// --- TASK: Double Numbers with Map ---
// Task: Take an array of numbers. Return a new array where each number is multiplied by 2 using .map().
// Hint: Do not use 'for' loop or '.push()'. Use 'return arr.map(...)' directly.

function doubleNumbersWithMap(arr: number[]): number[] {
  
  return arr.map((item) => {
    return item * 2
  });
}

// Quokka check:
console.log(doubleNumbersWithMap([1, 2, 3]));   // Expected: [2, 4, 6]
console.log(doubleNumbersWithMap([10, 20, 30])); // Expected: [20, 40, 60]


// --- TASK: Convert Array of Strings to Uppercase ---
// Task: Take an array of strings and return a new array where all words are fully in uppercase.
// Example: ["hello", "world"] -> ["HELLO", "WORLD"]


// APPROACH 1: Algorithmic (using classic 'for' loop and '.push()')
function uppercaseStringsLoop(arr: string[]): string[] {
  const result: string[] = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i].toUpperCase())
  }
  return result;
}


// APPROACH 2: Method-based (using '.map()' with the short one-line syntax)
function uppercaseStringsMap(arr: string[]): string[] {
  // Your code here
  return arr.map(item => item.toUpperCase());
}


// Quokka check:
console.log(uppercaseStringsLoop(["ts", "js"])); // Expected: ["TS", "JS"]
console.log(uppercaseStringsMap(["ts", "js"]));  // Expected: ["TS", "JS"]

// --- TASK: Capitalize Words in Array ---
// Task: Take an array of words and return a new array where each word has its first letter capitalized.
// Example: ["learn", "typescript"] -> ["Learn", "Typescript"]


// APPROACH 1: Algorithmic (using classic 'for' loop, index [0], '.slice(1)' and '.push()')
function capitalizeWordsLoop(arr: string[]): string[] {
  const result: string[] = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
  return result;
}


// APPROACH 2: Method-based (using '.map()' and one-line short syntax)
// Hint: Inside the map, do: word[0].toUpperCase() + word.slice(1)
function capitalizeWordsMap(arr: string[]): string[] {
  
  return arr.map(item => item[0].toUpperCase() + item.slice(1));
}


// Quokka check:
console.log(capitalizeWordsLoop(["quokka", "is", "awesome"])); // Expected: ["Quokka", "Is", "Awesome"]
console.log(capitalizeWordsMap(["quokka", "is", "awesome"]));  // Expected: ["Quokka", "Is", "Awesome"]


// ============================================================================
// MAIN TASK: Jaden Casing Strings (7 kyu)
// ============================================================================

interface String {
  toJadenCase(): string;
}

// Hint: Inside this function, 'this' refers to the original string.
// You need to:
// 1. Split 'this' into words.
// 2. Capitalize each word (using one of the approaches we practiced).
// 3. Join them back into a single string and return it.

String.prototype.toJadenCase = function (this: string): string {
  // Your code here
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
};

// Quokka.js check:
const quote = "How can mirrors be real if our eyes aren't real";
console.log(quote.toJadenCase()); 
// Expected: "How Can Mirrors Be Real If Our Eyes Aren't Real"


// Task: Maximum Length Difference (7 kyu)
// Find max(abs(length(x) - length(y))) where x is from a1 and y is from a2.
// If a1 or a2 are empty, return -1.

export const mxdiflg = (a1: string[], a2: string[]): number => {
 if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let lenA1 = a1.map(item => item.length)
  let lenA2 = a2.map(item => item.length)

  let resA1max = Math.max(...lenA1)
  let resA2max = Math.max(...lenA2)

  let resA1mi = Math.min(...lenA1)
  let resA2mi = Math.min(...lenA2)

  let res1 = Math.abs(resA1max - resA2mi)
  let res2 = Math.abs(resA2max - resA1mi)

  let result = Math.max(res2,res1)
  
  return result;
};

// Quokka.js check
const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknbxy", "yxpx"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwmmww"];
console.log(mxdiflg(s1, s2)); // Expected: 13
console.log(mxdiflg([], s2)); // Expected: -1 (edge case)

// --- TASK: Find Min and Max Lengths ---
// Task: Take an array of strings. Return an object with the min and max string lengths.
// Example: ["a", "abc", "bb"] -> { min: 1, max: 3 }


// APPROACH 1: Algorithmic (using a classic 'for' loop)
// Hint: Start with min = Infinity (or arr[0].length) and max = 0 (or arr[0].length)
function findMinMaxLoop(arr: string[]): { min: number; max: number } {
  
     let resMin = arr[0].length
     let resMax = arr[0].length

     for(let i = 0; i < arr.length; i++){
      const currentLength = arr[i].length;
      if(currentLength < resMin){
         resMin = currentLength 
      } else if (currentLength > resMax){
        resMax = currentLength  
      }
     

  }
  return { min: resMin, max: resMax };
}


// APPROACH 2: Method-based (using modern JS/TS methods)
// Hint: Convert strings to lengths using '.map(s => s.length)', 
// then use 'Math.min(...lengths)' and 'Math.max(...lengths)'
function findMinMaxMethods(arr: string[]): { min: number; max: number } {
  let res = arr.map(item => item.length)
  let mRes = Math.min(...res)
  let maxRes = Math.max(...res)
  return { min: mRes, max: maxRes };
}


// Quokka check:
const testArr = ["hoqq", "bbllkw", "oox", "ejjuyyy"];
console.log(findMinMaxLoop(testArr));    // Expected: { min: 3, max: 7 }
console.log(findMinMaxMethods(testArr)); // Expected: { min: 3, max: 7 }

// --- TASK: Sum of Array Numbers ---
// Task: Take an array of numbers and return their sum.
// Example: [1, 2, 3] -> 6


// APPROACH 1: Algorithmic (using a classic 'for' loop)
function sumArrayLoop(arr: number[]): number {
  let result = 0
  for(let i = 0; i < arr.length; i++){
result += arr[i]
  }
  return result;
}


// APPROACH 2: Method-based (using '.reduce()')
// Hint: reduce takes a function (accumulator, current) => accumulator + current, 
// and a starting value of 0 as the second argument: arr.reduce((acc, curr) => ..., 0)
function sumArrayReduce(arr: number[]): number {
  
  return arr.reduce((acc, current) => {
    return acc + current
  });
}


// Quokka check:
console.log(sumArrayLoop([1, 2, 3, 4]));   // Expected: 10
console.log(sumArrayReduce([1, 2, 3, 4])); // Expected: 10

// ============================================================================
// MAIN TASK: Calculate average (8 kyu)
// ============================================================================

export function findAverage(array: number[]): number {
  // 1. Edge Case: If array is empty, return 0
  if (array.length === 0) {
    return 0;
  }

  // 2. Calculate the sum using reduce (you can use the short syntax!)
  const sum = array.reduce((acc, current) => acc + current)

  // 3. Return sum divided by array length
  return sum / array.length; // Replace with your logic
}

// Quokka.js check
console.log(findAverage([1, 1, 1])); // Expected: 1
console.log(findAverage([1, 2, 3])); // Expected: 2
console.log(findAverage([]));        // Expected: 0

