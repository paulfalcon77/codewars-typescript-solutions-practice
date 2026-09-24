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

// Task: Fix string case (7 kyu)
// Convert the given string to either lowercase only or uppercase only based on:
// 1. Make as few changes as possible (compare count of lowercase and uppercase letters).
// 2. If the string contains an equal number of uppercase and lowercase letters, convert to lowercase.

export function solve(s: string): string {
  
  let resMax = 0
  let resMin = 0


  for(let i = 0; i < s.length; i++){
    if (s[i] === ' ') continue; 
    if(s[i] === s[i].toUpperCase()){
      resMax += 1
    } else if(s[i] === s[i].toLocaleLowerCase()){
      resMin += 1
    }
  } if(resMax > resMin){
    return s.toLocaleUpperCase()
  } else {
    return s.toLocaleLowerCase()
  }
 
}

// Quokka.js check:
console.log('coDe ->', solve("coDe")); // Expected: "code" (lowercase > uppercase)
console.log('CODe ->', solve("CODe")); // Expected: "CODE" (uppercase > lowercase)
console.log('coDE ->', solve("coDE")); // Expected: "code" (equal count -> lowercase)

// Task: A wolf in sheep's clothing (8 kyu)
// Warn the sheep in front of the wolf that it is about to be eaten.
// You are standing at the front of the queue which is at the end of the array.
//
// If the wolf is the closest animal to you (at the very end of the array), return:
// "Pls go away and stop eating my sheep"
//
// Otherwise, return:
// "Oi! Sheep number N! You are about to be eaten by a wolf!"
// (where N is the sheep's position in the queue, counting from the end of the array).

export function warnTheSheep(queue: string[]): string {
      
      let result = 0
      for(let i = queue.length - 1; i >= 0; i--){
        if(queue[queue.length - 1] === 'wolf'){
      return "Pls go away and stop eating my sheep"
        }
       else if(queue[i] !== 'wolf'){
        result += 1 
       } else {
        return `Oi! Sheep number ${result}! You are about to be eaten by a wolf!`
       }
     
  }
  return ""; 
}

// Quokka.js check:
console.log(warnTheSheep(["sheep", "sheep", "wolf"])); 
// Expected: "Pls go away and stop eating my sheep"

console.log(warnTheSheep(["sheep", "wolf", "sheep"])); 
// Expected: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])); 
// Expected: "Oi! Sheep number 2! You are about to be eaten by a wolf!"

// --- TASK: Testing 1-2-3 (7 kyu) ---
// Prepend each string in the array with its line number (starting from 1).
// Format: "n: string"

// APPROACH 1: Algorithmic (using a standard 'for' loop)
// Hint: Start loop at i = 0. Use template literals: `${i + 1}: ${array[i]}`
function numberLoop(array: string[]): string[] {
  let result: string[] = [];
  for(let i = 0; i < array.length; i++){
    result.push (`${i + 1}: ${array[i]}`)
  }
  return result;
}

// APPROACH 2: Method-based (using '.map()' with 'index' parameter)
// Hint: return array.map((line, index) => `${index + 1}: ${line}`)
function numberMap(array: string[]): string[] {
  // Your code here
  return array.map((item, index) => `${index + 1}: ${item}`);
}

// Quokka check:
console.log(numberLoop(["a", "b", "c"])); // Expected: ["1: a", "2: b", "3: c"]
console.log(numberMap(["a", "b", "c"]));  // Expected: ["1: a", "2: b", "3: c"]
console.log(numberMap([]));               // Expected: []

// --- TASK: Vowel Count (7 kyu) ---
// Return the number (count) of vowels in the given string.
// We will consider 'a', 'e', 'i', 'o', 'u' as vowels (but not 'y').


// APPROACH 1: Algorithmic (using a classic 'for' loop)
// Hint: Create 'let count = 0'. Loop through 'str'.
// If "aeiou" includes the current character, increment 'count'.
function getCountLoop(str: string): number {
  let count = 0;
  let char = "aeiou"
  for(let i = 0; i < str.length; i++){
    if(char.includes(str[i])){
      count += 1
    }

  }
  return count;
}


// APPROACH 2: Method-based (using '.split()' and '.filter()')
// Hint: 1. Split string into array of characters: 'str.split("")'
// 2. Use '.filter(char => "aeiou".includes(char))' to keep only vowels.
// 3. Return the '.length' of the filtered array!
function getCountFilter(str: string): number {
  
  return str.split('').filter(char => "aeiou".includes(char)).length
}


// Quokka check:
console.log(getCountLoop("abracadabra"));   // Expected: 5
console.log(getCountFilter("abracadabra")); // Expected: 5
console.log(getCountFilter("my pyx"));       // Expected: 0

// Task: List Filtering (7 kyu)
// Create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.

export function filter_list(l: Array<any>): Array<number> {
 
  // Use '.filter()' with 'typeof item === 'number''
  return l.filter(item => typeof item === 'number')

}
// Quokka.js check:
console.log(filter_list([1, 2, "a", "b"]));             // Expected: [1, 2]
console.log(filter_list([1, "a", "b", 0, 15]));         // Expected: [1, 0, 15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // Expected: [1, 2, 123]

// Task: Isograms (7 kyu)
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Ignore letter case (e.g. "A" and "a" are the same). Return true if isogram, false otherwise.

// APPROACH 1: Algorithmic (using a loop and a "seen" characters array)
function isIsogramLoop(word: string): boolean {
  const lowercaseWord = word.toLowerCase();
  const seenLetters: string[] = [];

  for (let i = 0; i < lowercaseWord.length; i++) {
    const char = lowercaseWord[i];
     if(seenLetters.includes(char)){
      return false
    } 
    seenLetters.push(char)
  
    // Hint: If seenLetters already includes 'char', return false.
    // Otherwise, push 'char' into 'seenLetters'.
    // Your code here
  }

  return true;
}

// APPROACH 2: Method-based (using modern 'Set')
// Hint: 'new Set(array)' removes all duplicates.
// 'word.toLowerCase().split("")' creates array of characters.
// Check if the '.size' of the Set is equal to the '.length' of the array.
function isIsogramSet(word: string): boolean {
  let arr = word.toLocaleLowerCase().split('')

  let arrSet = new Set(arr)
  if(arrSet.size < arr.length)
  return false;
return true
}


// Quokka.js check:
console.log(isIsogramLoop("Dermatoglyphics")); // Expected: true
console.log(isIsogramLoop("aba"));              // Expected: false
console.log(isIsogramLoop("moOse"));            // Expected: false (ignore case)

console.log(isIsogramSet("Dermatoglyphics"));  // Expected: true
console.log(isIsogramSet("aba"));               // Expected: false


// ============================================================================
// TRAINING: Seen Array vs Set
// ============================================================================

// --- MICRO-TASK 1: Has Duplicate Numbers (using Loop and "seen" array) ---
// Task: Take an array of numbers. Return true if there are any duplicate numbers, false otherwise.
// Hint: Create 'const seen: number[] = []'. Loop through 'nums'.
// If 'seen.includes(num)' -> return true. Otherwise 'seen.push(num)'.

function hasDuplicatesLoop(nums: number[]): boolean {
  const seen: number[] = []
  for(let i = 0; i < nums.length; i++){
    if(seen.includes(nums[i])){
    return true
  }
    seen.push(nums[i]);

  } 
  return false;
}

// Quokka check:
console.log(hasDuplicatesLoop([1, 2, 3, 4])); // Expected: false
console.log(hasDuplicatesLoop([1, 2, 2, 3])); // Expected: true


// --- MICRO-TASK 2: Unique Element Count (using 'Set') ---
// Task: Take an array of strings. Return the number of UNIQUE strings in the array using 'Set'.
// Example: ["apple", "banana", "apple"] -> 2

function countUniqueWords(words: string[]): number {
  let arr = new Set(words)
  // Create 'const mySet = new Set(words)' and return its '.size'
  return arr.size;
}

// Quokka check:
console.log(countUniqueWords(["js", "ts", "js", "html"])); // Expected: 3

// Task: Printing Array elements with Comma delimiters (8 kyu)
// Convert an array of any elements into a single string, joined by commas.

// APPROACH 1: Algorithmic (using a loop)
// Hint: Create let result = "". Loop through 'array'.
// Append 'array[i]' to 'result'. If it's NOT the last element, also append ",".
function printArrayLoop(array: any[]): string {
  let result = "";
  for(let i = 0; i < array.length; i++){
    result += array[i]
    if(i !== array.length - 1){
      result += (' , ')
    }
  }
  return result;
}

// APPROACH 2: Method-based (using '.join()')
// Hint: Just return array.join(",")
function printArrayJoin(array: any[]): string {
  // Your code here
  return  array.join(",");
}

// Quokka.js check:
console.log(printArrayLoop(["h", "o", "l", "a"])); // Expected: "h,o,l,a"
console.log(printArrayLoop([2, 4, 5, 2]));       // Expected: "2,4,5,2"

console.log(printArrayJoin(["h", "o", "l", "a"])); // Expected: "h,o,l,a"
console.log(printArrayJoin([true, false]));        // Expected: "true,false"

// Task: Sum of angles (7 kyu)
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. 
// N will be greater than 2.
// Formula: (n - 2) * 180

export function angle(n: number): number {
  // Your code here
  // Apply the geometric formula and return the result
  return (n-2) * 180;
}

// Quokka.js check:
console.log(angle(3)); // Expected: 180 (triangle)
console.log(angle(4)); // Expected: 360 (quadrilateral)
console.log(angle(5)); // Expected: 540 (pentagon)

// Task: Get the Middle Character (7 kyu)
// Return the middle character of the string. 
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// APPROACH 1: Index-based (using string indexing s[i] and if/else)
function getMiddleIndex(s: string): string {
  const mid = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    // Even length: return two characters (mid - 1 and mid) joined together
    return s[mid - 1] + s[mid];
  } else {
    // Odd length: return single character at 'mid'
    return s[mid];
  }
}

// APPROACH 2: Method-based (using '.slice()')
// Hint: For odd, use s.slice(mid, mid + 1)
// For even, use s.slice(mid - 1, mid + 1)
function getMiddleSlice(s: string): string {
  const mid = Math.floor(s.length / 2);
  
  if (s.length % 2 === 0) {
    return s.slice(mid - 1, mid + 1);
  } else {
    return s.slice(mid, mid + 1);
  }
}

// Quokka.js check:
console.log(getMiddleIndex("testing")); // Expected: "t"
console.log(getMiddleIndex("test"));    // Expected: "es"

console.log(getMiddleSlice("middle"));  // Expected: "dd"
console.log(getMiddleSlice("A"));       // Expected: "A"


// Task: Flatten and sort an array (7 kyu)
// Given a two-dimensional array of integers, 
// return the flattened version of the array with all the integers in the sorted (ascending) order.

export function flattenAndSort(inputArray: number[][]): number[] {
   let result: number[] = [];
  for(let i= 0; i < inputArray.length; i++){
     for(let j = 0; j < inputArray[i].length; j++){
      result.push(inputArray[i][j]) 
 
       }  
  }
return result.sort((a, b) => a - b);;
}

// Quokka.js check:
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])); 
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(flattenAndSort([[], [1]])); 
// Expected output: [1]

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); 
// Expected output: [1, 2, 3, 4, 5, 6, 100]

// Task: Mexican Wave (6 kyu)
// Create a function that turns a string into a Mexican Wave. 
// Return an array of strings where an uppercase letter is a person standing up.
// 
// Rules:
// 1. The input string will always consist of lowercase letters and spaces, but may be empty.
// 2. If the character in the string is whitespace, then pass over it as if it was an empty seat.

export function wave(str: string): Array<string> {
  let result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    // Rule 2: Skip spaces
    if (str[i] === " ") {
      continue;
    }

    // Build wave at index 'i'
    const partBefore = str.slice(0, i);
    const capitalizedChar = str[i].toUpperCase();
    const partAfter = str.slice(i + 1);

    const wavedString = partBefore + capitalizedChar + partAfter;
    result.push(wavedString);
  }

  return result;
}

// Quokka.js check:
console.log(wave("hello")); 
// Expected: ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

console.log(wave("two words")); 
// Expected: ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]

console.log(wave("")); 
// Expected: []


// --- TRAINING TASK: Capitalize at Index ---
// Task: Take a string and an index. Return a new string 
// where only the character at the specified index is capitalized.
// Hint: combine str.slice(0, index), str[index].toUpperCase(), and str.slice(index + 1)

function capitalizeAtIndex(str: string, index: number): string {
  let result: string[] = []
   const partBefore = str.slice(0, index);
  //const replacement = str[i];
  const partAfter = str.slice(index + 1);
  for(let i = 0; i < str.length; i++){
    result.push(partBefore + str[i].toUpperCase() + partAfter)
  }
  return result;
}

// Quokka check:
console.log(capitalizeAtIndex("hello", 0)); // Expected: "Hello"
console.log(capitalizeAtIndex("hello", 1)); // Expected: "hEllo"
console.log(capitalizeAtIndex("hello", 4)); // Expected: "hellO"

// Task: Alternate Capitalization (7 kyu)
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
// and return as shown below. Index 0 will be considered even.
// 
// Example:
// capitalize("abcdef") -> ['AbCdEf', 'aBcDeF']

export function capitalize(s: string): [string, string] {
  let res = s.split('')
  let result: string [] = [];
  let otherwise: string [] = []
 
  for(let i = 0; i < res.length; i++){
      let a = s[i].toUpperCase()
      let b = s[i].toLocaleLowerCase()
    if(i % 2 === 0){

      result.push(a)
      otherwise.push(b)
      } else {
    
      result.push(b)
      otherwise.push(a)
      }
    }

       return [result.join(''), otherwise.join('')];
    
  } 
 
 


// Quokka.js check:
console.log(capitalize("abcdef"));      // Expected: ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars"));    // Expected: ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")); // Expected: ['AbRaCaDaBrA', 'aBrAcAdAbRa']

export function checkCoupon(
  enteredCode: any, 
  correctCode: any, 
  currentDate: string, 
  expirationDate: string
): boolean {
  // 1. Проверяем строгое равенство кодов и их типов
  if (enteredCode !== correctCode) {
    return false;
  }

  // 2. Преобразуем строковые даты в объекты Date для сравнения
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  // 3. Проверяем, что текущая дата не больше даты истечения
  return current <= expiration;
}


// Task: Take a Ten Minutes Walk (6 kyu)
// Create a function that will return true if the walk takes exactly ten minutes 
// and will return you to your starting point. Return false otherwise.
// Note: each step takes 1 minute. Directions are: 'n', 's', 'e', 'w'.

export function isValidWalk(walk: string[]): boolean {

   if(walk.length > 10){
      return false
    }

  let x = 0;
  let y = 0;

  for(let i = 0; i < walk.length; i++){
   
    if(walk[i] === 'n'){
       y += 1
    }
      if(walk[i] === 's'){
       y -= 1
    }
        if(walk[i] === 'w'){
       x -= 1
    }
        if(walk[i] === 'e'){
       x += 1
    }
  }
  return x === 0 && y === 0;
}

// Quokka.js check:
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); 
// Expected: true (10 steps, returns to start)

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); 
// Expected: false (12 steps - too long!)

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); 
// Expected: false (10 steps, but N = 6 and S = 4 - did not return to start!)


// Task: I love you, a little , a lot, passionately ... not at all (8 kyu)
// Determine which phrase the girl will say when she tears the last petal of a flower with 'petals' count.

// APPROACH 1: Algorithmic (using a 'for' loop to cycle through index)
export function howMuchILoveYouLoop(petals: number): string {
  const names: string[] = [
    "I love you", 
    "a little", 
    "a lot", 
    "passionately", 
    "madly", 
    "not at all"
  ];

  let index = 0;

  for(let i = 1; i < petals; i++){
    index += 1
    if(index === 6 ){
      index = 0 
    }
  }

  
  return names[index];
}

// APPROACH 2: Mathematical (using modulo operator '%' without loops)
// Hint: Since we have 6 phrases, we can use: (petals - 1) % 6 to find the index directly!
export function howMuchILoveYouMath(petals: number): string {
  const names: string[] = [
    "I love you", 
    "a little", 
    "a lot", 
    "passionately", 
    "madly", 
    "not at all"
  ];
     
  // Your code here: return the name at the calculated index
  return "";
}

// Quokka.js check:
console.log(howMuchILoveYouLoop(3));  // Expected: "a lot"
console.log(howMuchILoveYouLoop(6));  // Expected: "not at all"
console.log(howMuchILoveYouLoop(7));  // Expected: "I love you" (starts over!)

console.log(howMuchILoveYouMath(7));  // Expected: "I love you"
console.log(howMuchILoveYouMath(8));  // Expected: "a little"

// Task: All Star Code Challenge #18 (8 kyu)
// Create a function that accepts a string and a single character, 
// and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

export function strCount(str: string, letter: string): number {
  let newStr = str.split('')
  let result = 0;
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] === letter){
       result += 1
    }
  }
  return result;
}

// Quokka.js check:
console.log(strCount("Hello", "o")); // Expected: 1
console.log(strCount("Hello", "l")); // Expected: 2
console.log(strCount("", "z"));      // Expected: 0

// Task: Find Multiples of a Number (8 kyu)
// Write a function that takes two integers (integer and limit)
// and returns a list of the multiples of 'integer' up to and possibly including 'limit'.
//
// Examples:
// integer = 2, limit = 6 -> [2, 4, 6]
// integer = 2, limit = 5 -> [2, 4]

export function findMultiples(integer: number, limit: number): number[] {
    
  // if(integer > 0 && limit >= integer){
  //   continue;
  //   }
  let result: number[] = [];
    for(let i = integer; i <= limit; i+= integer){
       
         result.push(i)
    
  
  }return result;
  }
  
  


// Quokka.js check:
console.log(findMultiples(5, 25)); // Expected: [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2));  // Expected: [1, 2]
console.log(findMultiples(5, 7));  // Expected: [5]
console.log(findMultiples(4, 27)); // Expected: [4, 8, 12, 16, 20, 24]

// Task: Counting Duplicates (6 kyu)
// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string.

// APPROACH 1: Algorithmic (using a loop and two tracking arrays: 'seen' and 'duplicates')
export function duplicateCountLoop(text: string): number {
  const lowercaseText = text.toLowerCase();
  const seen: string[] = [];
  const duplicates: string[] = [];

  for (let i = 0; i < lowercaseText.length; i++) {
    const char = lowercaseText[i];
    
    if(seen.includes(char) && !duplicates.includes(char)){
        duplicates.push(char)
    } else {
      seen.push(char)
    }
  

    // Hint: 
    // 1. If 'seen' already includes 'char', it means this is a duplicate!
    // 2. But we only want to count it ONCE. So check: if 'seen' includes 'char' 
    //    AND 'duplicates' does NOT include 'char' yet -> push 'char' into 'duplicates'.
    // 3. If 'seen' does not include 'char' at all -> push 'char' into 'seen'.
    // Your code here
  }
   
  // Return the count of unique duplicates
  return duplicates.length;
  
}

// APPROACH 2: Method-based (using modern JS Set and filter)
// We will study this if you want, but try the Loop approach first!
export function duplicateCountMethods(text: string): number {
  let a = new Set(text)
  return a.size;
}

// Quokka.js check:
console.log(duplicateCountLoop("abcde"));           // Expected: 0
console.log(duplicateCountLoop("aabbcde"));         // Expected: 2
console.log(duplicateCountLoop("aabBcde"));         // Expected: 2 (case-insensitive)
console.log(duplicateCountLoop("Indivisibilities")); // Expected: 2


// --- MICRO-TASK 1: Get Only Duplicates ---
// Task: Take an array of numbers and return a new array containing ONLY duplicate numbers.
// Hint: use .filter((num, index) => arr.indexOf(num) !== index)

function getOnlyDuplicates(arr: number[]): number[] {
  // Your code here
  return arr.filter((num, index) => arr.indexOf(num) !== index);
}

// Quokka check:
console.log(getOnlyDuplicates([1, 2, 3, 1, 2])); // Expected: [1, 2] (потому что вторые 1 и 2 — это дубликаты)
console.log(getOnlyDuplicates([5, 5, 5]));       // Expected: [5, 5] (вторая и третья пятерки — дубликаты)


// Task: How old will I be in 2099? (8 kyu)
// Write a function that takes yearOfBirth and currentYear.
// Return how many years old Philipp is, or how many years until he is born.
// Account for both "year" and "years" depending on the result.

export function calculateAge(yearOfBirth: number, currentYear: number): string {
  if(yearOfBirth === currentYear){
    return "You were born this very year!"
  }
    if((yearOfBirth - currentYear) === 1){
    return `You will be born in 1 year.`
  }
    if(yearOfBirth > currentYear){
    return `You will be born in ${yearOfBirth - currentYear} years.`
  }
    if((currentYear - yearOfBirth) === 1){
    return `You are ${currentYear - yearOfBirth} year old.`
  }
   if(yearOfBirth < currentYear){
    return `You are ${currentYear - yearOfBirth} years old.`
  }


  // 1. Calculate difference: currentYear - yearOfBirth
  // 2. Write if/else conditions for past, future and same year
  // 3. Make sure to check if difference is exactly 1 (to use 'year' instead of 'years')
  return "";
}

// Quokka.js check:
console.log(calculateAge(2012, 2016)); // Expected: "You are 4 years old."
console.log(calculateAge(1989, 2016)); // Expected: "You are 27 years old."
console.log(calculateAge(2000, 2090)); // Expected: "You are 90 years old."

console.log(calculateAge(2000, 1990)); // Expected: "You will be born in 10 years."
console.log(calculateAge(3400, 3400)); // Expected: "You were born this very year!"

// Singular cases (singular 'year'):
console.log(calculateAge(2011, 2012)); // Expected: "You are 1 year old."
console.log(calculateAge(2012, 2011)); // Expected: "You will be born in 1 year."

// Task: Find out whether the shape is a cube (8 kyu)
// Return true if the cuboid could have equal sides (be a cube), return false otherwise.
// Return false for invalid numbers too (e.g. volume or side is less than or equal to 0).
// Formula: volume === side * side * side

export function cubeChecker(volume: number, side: number): boolean {
  if(volume <=0 || side <= 0){
    return false
  }

  if((side * side * side) === volume){
    return true
  } else {
    return false
  }
  // 1. Check if volume or side is less than or equal to 0 -> return false
  // 2. Check if volume is equal to side * side * side
  return false;
}

// Quokka.js check:
console.log(cubeChecker(1, 1));   // Expected: true  (1 === 1*1*1)
console.log(cubeChecker(8, 2));   // Expected: true  (8 === 2*2*2)
console.log(cubeChecker(27, 3));  // Expected: true  (27 === 3*3*3)

console.log(cubeChecker(12, 2));  // Expected: false (12 !== 2*2*2)
console.log(cubeChecker(0, 35));  // Expected: false (volume is 0!)
console.log(cubeChecker(-8, -2)); // Expected: false (negative numbers!)


// Task: Multiple of index (8 kyu)
// Return a new array consisting of elements which are multiple of their own index in input array.
// Formula: index !== 0 && item % index === 0

// APPROACH 1: Algorithmic (using a 'for' loop)
export function multipleOfIndexLoop(array: number[]): number[] {
  const result: number[] = [];
  
  // Start loop from i = 1 (to avoid index 0 and division by zero!)
  for (let i = 1; i < array.length; i++) {
    if(array[i] % i === 0){
      result.push(array[i])
    }
    // If array[i] is multiple of i -> result.push(array[i])
    // Your code here
  }
  
  return result;
}

// APPROACH 2: Method-based (using '.filter()' with '(item, index)' parameters)
// Hint: return array.filter((item, index) => index !== 0 && item % index === 0)
export function multipleOfIndexFilter(array: number[]): number[] {
  // Your code here
  return [];
}

// Quokka.js check:
console.log(multipleOfIndexLoop([22, -6, 32, 82, 9, 25])); 
// Expected: [-6, 32, 25]

console.log(multipleOfIndexFilter([68, -1, 1, -7, 10, 10])); 
// Expected: [-1, 10]

// Task: You're a square! (7 kyu)
// Given an integral number, determine if it's a square number.
// Perfect square is an integer that is the product of some integer with itself.

export default function isSquare(n: number): boolean {
  let res = Math.sqrt(n)
  let result = res % 1
  if(result === 0){
    return true
  }
  return false;
}

// Quokka.js check:
console.log(isSquare(-1)); // Expected: false (negative)
console.log(isSquare(0));  // Expected: true  (0 * 0)
console.log(isSquare(3));  // Expected: false
console.log(isSquare(4));  // Expected: true  (2 * 2)
console.log(isSquare(25)); // Expected: true  (5 * 5)
console.log(isSquare(26)); // Expected: false


// Task: Unique In Order (6 kyu)
// Implement the function which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
  let result: (string | number)[] = []
  
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1])
    result.push(iterable[i])

  }
  return result;
}

// Quokka.js check:
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // Expected: ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // Expected: ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));   // Expected: [1, 2, 3]
console.log(uniqueInOrder([]));                // Expected: []


// Task: Highest Scoring Word (6 kyu)
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2...
// If two words score the same, return the word that appears earliest in the original string.

export const high = (str: string): string => {
  let result = "";
  let maxScore = 0;
  
  let res = str.split(' ')
  for(let i = 0; i < res.length; i++){
    let scoreRes = 0

    for(let j = 0; j < res[i].length; j++){
      let score = res[i][j].charCodeAt(0) - 96
      scoreRes += score
      if (scoreRes > maxScore) {
  maxScore = scoreRes;
  result = res[i]; // Записываем текущее слово в результат
}
       
    }
  }
  return result;
};

// Quokka.js check:
console.log(high('man i need a taxi up to ubud')); 
// Expected: "taxi" (taxi = 20+1+24+9 = 54, ubud = 21+2+21+4 = 48)

console.log(high('what time are we climbing up the volcano')); 
// Expected: "volcano"

console.log(high('take me to semynak')); 
// Expected: "semynak"

// --- TRAINING TASK: Get Word Score ---
// Task: Take a single word (with no spaces) and return its total score.
// Each letter scores points according to its position in the alphabet: a = 1, b = 2, c = 3...
// Hint: loop through 'word' and use 'word.charCodeAt(i) - 96' to get score of each letter.

function getWordScore(word: string): number {
  let totalScore = 0;
  
  for (let i = 0; i < word.length; i++) {
    // 1. Получаем код текущей буквы word[i] и вычитаем 96
    const letterScore = word.charCodeAt(i) - 96;
    totalScore += letterScore
    // 2. Добавляем letterScore к нашей общей сумме totalScore
    // Your code here
  }
  
  return totalScore;
}

// Quokka check:
console.log(getWordScore("abad")); // Expected: 8 (1 + 2 + 1 + 4)
console.log(getWordScore("taxi")); // Expected: 54 (20 + 1 + 24 + 9)


// Task: Small enough? - Beginner (7 kyu)
// Check that all values in the array are below or equal to the limit value. 
// If they are, return true. Else, return false.

// APPROACH 1: Algorithmic (using a classic 'for' loop)
// Hint: loop through 'a'. If you find any number greater than 'limit' -> return false immediately!
// If the loop finishes without returning false -> return true.
export function smallEnoughLoop(a: number[], limit: number): boolean {
  // Your code here
  return false;
}

// APPROACH 2: Method-based (using '.every()')
// Hint: return a.every(num => num <= limit)
export function smallEnoughEvery(a: number[], limit: number): boolean {
 
  for(let i = 0; i < a.length; i++){
    if(a[i] > limit){
      return false
    }
} return true
}

// Quokka.js check:
console.log(smallEnoughLoop([66, 101], 200)); 
// Expected: true (both 66 and 101 are <= 200)

console.log(smallEnoughLoop([78, 117, 110, 99], 100)); 
// Expected: false (117, 110 are greater than 100!)

console.log(smallEnoughEvery([101, 45, 75, 105, 99, 107], 107)); 
// Expected: true (all numbers are <= 107)



// Task: Meeting (6 kyu)
// 1. Make the string uppercase.
// 2. Format each guest as: "(LAST, FIRST)"
// 3. Sort alphabetically by last name (and then by first name if last names are equal).
// 4. Join them back into a single string.

export function meeting(s: string): string {
  return s.toUpperCase().split(';').map(guest => {
    const [first, last] = guest.split(':')
    return `(${last}, ${first})`;
  }).sort().join('')
  
}

// Quokka.js check:
const list = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(list));
// Expected: "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


// --- TRAINING TASK: Format Single Guest ---
// Task: Convert "NAME:SURNAME" -> "(SURNAME, NAME)"
function formatGuest(guest: string): string {
  let res = guest.split(':')
   let temp = res[0];
            res[0]=res[1];
            res[1] = temp

    let result = "(" + res.join(', ') + ')'

  return result;
}

console.log(formatGuest("FRED:CORWILL")); // Expected: "(CORWILL, FRED)"

// Task: Your order, please (6 kyu)
// Sort a string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

export function order(words: string): string {
  if (!words) return "";
  function extractNumber(word: string): number {
    for (let char of word) {
      if (char >= '0' && char <= '9') {
        return Number(char);
      }
    }
    return 0
} 
let res = words.split(' ').sort((a, b) => extractNumber(a) - extractNumber(b)).join(' ')

return res;
}
// Quokka.js check:
console.log(order("is2 Thi1s T4est 3a"));      // Expected: "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Expected: "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""));                        // Expected: ""

// --- TRAINING TASK: Find Digit in Word ---
// Task: Find a digit character in a string and return it as a number.
// Example: "Thi1s" -> 1

function findDigitInWord(word: string): number {
  let res = word.split('')
  let result = 0
  for (let i = 0; i < res.length; i++) {
    if(res[i] >= '0' && res[i] <='9'){
      result += Number(res[i])
    }

  }
 return result;
}

console.log(findDigitInWord("Thi1s")); // 1
console.log(findDigitInWord("T4est")); // 4

// Task: Persistent Bugger (6 kyu)
// Write a function, that takes in a positive parameter and returns 
// its multiplicative persistence, which is the number of times 
// you must multiply the digits in num until you reach a single digit.



// Quokka.js check:
console.log(persistence(39));  // Expected: 3
console.log(persistence(999)); // Expected: 4
console.log(persistence(4));   // Expected: 0


function sumDigits(n: number): number {
  let result = n.toString().split('').map(Number)
  let total = 0
  for(let i = 0; i < result.length; i++){
    total += result[i]
  }
  return total;
}

// Проверка:
console.log(sumDigits(39)); // 3 + 9 = 12
console.log(sumDigits(999)); // 9 + 9 + 9 = 27

// --- TASK: Multiply Digits ---
// Task: Take a number, get its digits, and return their product.
// Example: 39 -> 3 * 9 = 27

function multiplyDigits(n: number): number {
let result = n.toString().split('').reduce((acc, current) =>{
  return acc * Number(current)
},1)
  
  return result;
}

// Quokka.js check:
console.log(multiplyDigits(39));  // Expected: 27
console.log(multiplyDigits(999)); // Expected: 729

// --- FINAL TRAINING TASK: Count Persistence ---
// Task: Use your 'multiplyDigits' logic inside a 'while' loop.
// Count how many times you perform the multiplication until 'num' becomes < 10.

function persistence(num: number): number {
  let count = 0;
  let currentNum = num;
while(currentNum >= 10){
  currentNum = multiplyDigits(currentNum)
  count += 1
}

  return count;
}

// Quokka.js check:
console.log(persistence(39));  // Expected: 3 (39 -> 27 -> 14 -> 4)
console.log(persistence(999)); // Expected: 4
console.log(persistence(4));   // Expected: 0 

// ==========================================
// Find Maximum and Minimum Values of a List
// ==========================================


export const min = (list: number[]): number => {
  let res: number[] = list.sort((a, b) => a - b);
  let result = res[0]
  return result
};

export const max = (list: number[]): number => {
  let resMax: number[] = list.sort((a, b) => a - b);
  let result = resMax[resMax.length - 1]
  return result
 
};

// ==========================================
// Quokka.js
// ==========================================
console.log(min([-52, 56, 30, 29, -54, 0, -110])); // : -110
console.log(min([42, 54, 65, 87, 0]));              //: 0

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));  // : 566
console.log(max([5]));                             // : 5


// ==========================================
// Hello, Name or World!
// ==========================================
// Напишите функцию hello(name), которая возвращает приветствие:
// 1. Если имя передано, верните "Hello, <Name>!"
//    Имя должно быть отформатировано: первая буква заглавная, остальные строчные (например, "jOHn" -> "John").
// 2. Если имя не передано или передана пустая строка "", верните "Hello, World!"

export function hello(name = ''): string {
  if(name == ''){
    return `Hello, World!`
  }
  let nameRes = name.split('')
  let result: string[] = []
 
  for(let i = 1; i < nameRes.length; i++){
    result.push(nameRes[i].toLowerCase())
  } 
  let total = result.join('')
  let res = nameRes[0].toUpperCase()
  
  return `Hello, ${res}${total}`;
}

// ==========================================
// Тесты для Quokka.js
// ==========================================
console.log(hello('johN'));  // Ожидается: "Hello, John!"
console.log(hello('aliCE')); // Ожидается: "Hello, Alice!"
console.log(hello(''));      // Ожидается: "Hello, World!"
console.log(hello());        // Ожидается: "Hello, World!"

// ==========================================
// Task: Holiday VIII - Duty Free (8 kyu)
// ==========================================
// The purpose of this kata is to calculate how many bottles of duty-free 
// whiskey you need to buy to cover the cost of your holiday through savings.
// 
// Parameters:
// - normPrice: standard bottle price in £
// - discount: duty-free discount percentage (%)
// - hol: total holiday cost in £
// 
// Return: 
// - The number of duty-free bottles required (rounded down to the nearest whole integer).

export function dutyFree(normPrice: number, discount: number, hol: number): number {
  let price = normPrice * (discount / 100)
  return Math.floor(hol / price);
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(dutyFree(10, 10, 500));   // Expected: 500
console.log(dutyFree(12, 50, 1000));  // Expected: 166
console.log(dutyFree(17, 10, 500));   // Expected: 294
console.log(dutyFree(24, 35, 3000));  // Expected: 357

// ==========================================
// Task: Exclamation marks series #4: Remove all exclamation marks 
// from sentence but ensure a exclamation mark at the end of string (8 kyu)
// ==========================================
// Description:
// Remove all exclamation marks from the sentence, but ensure 
// there is exactly one exclamation mark at the end of the string.
//
// Examples:
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

export function remove(s: string): string {
  let result = s.split('')
  let res: string[] = []
  for(let i = 0; i < result.length; i++){
    if(result[i] != '!'){
      res.push(result[i])
    }
  } 
  let total = res.join('')
  return `${total}!`
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(remove("Hi!"));      // Expected: "Hi!"
console.log(remove("Hi!!!"));    // Expected: "Hi!"
console.log(remove("!Hi"));      // Expected: "Hi!"
console.log(remove("!Hi!"));     // Expected: "Hi!"
console.log(remove("Hi! Hi!"));  // Expected: "Hi Hi!"
console.log(remove("Hi"));       // Expected: "Hi!"

// ==========================================
// Task: Find the unique number (6 kyu)
// ==========================================
// Description:
// There is an array with some numbers. All numbers are equal except for one. 
// Try to find it!
//
// Notes:
// - Guaranteed that the array contains at least 3 numbers.
// - The tests contain huge arrays, so keep performance in mind.
//
// Examples:
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

export function findUniq(arr: number[]): number {
  let res = arr.sort((a,b) => a - b)
if (res[0] === res[1]) {
    return res[res.length - 1];
  }

  return res[0];
  }
  


// ==========================================
// Quokka.js Tests
// ==========================================
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));  // Expected: 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));  // Expected: 0.55
console.log(findUniq([ 3, 10, 3, 3, 3 ]));     // Expected: 10
console.log(findUniq([ 8, 8, 8, 8, 4 ]));      // Expected: 4

// ==========================================
// Task: Sum of Cubes (7 kyu)
// ==========================================
// Description:
// Write a function that takes a positive integer n, sums all the cubed 
// values from 1 to n (inclusive), and returns that sum.
//
// Assume that the input n will always be a positive integer.
//
// Examples:
// 2 --> 9 (sum of the cubes of 1 and 2 is 1^3 + 2^3 = 1 + 8 = 9)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36)

export function sumCubes(n: number): number {
  let res = 0
  for(let i = 1; i <= n; i++){
     res += i**3
  }
  return res;
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(sumCubes(1));  // Expected: 1
console.log(sumCubes(2));  // Expected: 9
console.log(sumCubes(3));  // Expected: 36
console.log(sumCubes(4));  // Expected: 100

// ============================================================================
// TASK 1: Reverse Array In-Place (Easy)
// ============================================================================
// Description:
// Reverse the array "in-place" without creating a new array or using .reverse().
// Use loops and element swapping (temp variable).
//
// Example:
// [1, 2, 3, 4, 5] --> [5, 4, 3, 2, 1]

export function reverseInPlace(arr: number[]): number[] {
  
  return '';
}
// Quokka Tests (Task 1)
console.log('Task 1: Reverse Array');
console.log(reverseInPlace([1, 2, 3, 4, 5])); // Expected: [5, 4, 3, 2, 1]
console.log(reverseInPlace([10, 20]));       // Expected: [20, 10]
console.log(reverseInPlace([7]));            // Expected: [7]
console.log('--------------------------------------------------');


// ============================================================================
// TASK 2: Find Most Frequent Element (Easy+)
// ============================================================================
// Description:
// Find the number that appears most frequently in the array.
// If there are multiple, return any of them.
//
// Example:
// [3, 7, 3, 2, 3, 7, 2, 7, 7] --> 7 (appears 4 times)

export function findMostFrequent(arr: number[]): number {
  // Your code here
  return 0;
}

// Quokka Tests (Task 2)
console.log('Task 2: Most Frequent');
console.log(findMostFrequent([3, 7, 3, 2, 3, 7, 2, 7, 7])); // Expected: 7
console.log(findMostFrequent([1, 1, 2, 2, 2, 3]));          // Expected: 2
console.log(findMostFrequent([5, 5, 5]));                   // Expected: 5
console.log('--------------------------------------------------');


// ============================================================================
// TASK 3: Check Subarray (Medium-)
// ============================================================================
// Description:
// Check if the "target" array exists inside "arr" as a continuous sequence.
//
// Examples:
// arr = [1, 2, 3, 4, 5], target = [2, 3, 4] --> true
// arr = [1, 2, 3, 4, 5], target = [2, 4]    --> false (not continuous)

export function isSubarray(arr: number[], target: number[]): boolean {
  // Your code here
  return false;
}

// Quokka Tests (Task 3)
console.log('Task 3: Is Subarray');
console.log(isSubarray([1, 2, 3, 4, 5], [2, 3, 4])); // Expected: true
console.log(isSubarray([1, 2, 3, 4, 5], [2, 4]));    // Expected: false
console.log(isSubarray([1, 2, 3, 4, 5], [1, 2, 3])); // Expected: true
console.log(isSubarray([1, 2, 3, 4, 5], [4, 5, 6])); // Expected: false
console.log('--------------------------------------------------');


// ============================================================================
// TASK 4: Two Sum (Medium)
// ============================================================================
// Description:
// Find indices of two numbers in "nums" that add up to "target".
//
// Example:
// nums = [2, 7, 11, 15], target = 9 --> [0, 1] (because 2 + 7 = 9)

export function twoSum(nums: number[], target: number): number[] {
  // Your code here
  return [];
}

// Quokka Tests (Task 4)
console.log('Task 4: Two Sum');
console.log(twoSum([2, 7, 11, 15], 9));  // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Expected: [1, 2]
console.log(twoSum([3, 3], 6));          // Expected: [0, 1]
console.log('--------------------------------------------------');


// ==========================================
// Task: Deodorant Evaporator (7 kyu)
// ==========================================
// Description:
// This program tests the life of an evaporator containing a gas.
// We know the content of the evaporator (content in ml), the percentage of foam 
// or gas lost every day (evapPerDay) and the threshold (threshold) in percentage 
// beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
// The program reports the nth day (as an integer) on which the evaporator 
// will be out of use.
//
// Examples:
// evaporator(10, 10, 10) ==> 22
// evaporator(10, 10, 5)  ==> 29

export function evaporator(content: number, evapPerDay: number, threshold: number): number {
let limit = content * (threshold / 100)
let days= 0
 while (content > limit) {
  content-= content *(evapPerDay / 100)
  days ++
 }
  return days
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(evaporator(10, 10, 10)); // Expected: 22
console.log(evaporator(10, 10, 5));  // Expected: 29

// ==========================================
// Task: Highest and Lowest (7 kyu)
// ==========================================
// Description:
// In this assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.
//
// Notes:
// - All numbers are valid Int32, no need to validate them.
// - There will always be at least one number in the input string.
// - Output string must be two numbers separated by a single space, 
//   with highest number first.
//
// Examples:
// highAndLow("1 2 3 4 5")  // return "5 1"
// highAndLow("1 2 -3 4 5") // return "5 -3"
// highAndLow("1 9 3 4 -5") // return "9 -5"

export class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(' ');
    let max = Number(arr[0]);
    let min = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      const current = Number(arr[i]);
      if (current > max) {
        max = current;
      }
      if (current < min) {
        min = current;
      }
    }

    return `${max} ${min}`;
  }
}
// ==========================================
// Quokka.js Tests
// ==========================================
console.log(Kata.highAndLow("1 2 3 4 5"));  // Expected: "5 1"
console.log(Kata.highAndLow("1 2 -3 4 5")); // Expected: "5 -3"
console.log(Kata.highAndLow("1 9 3 4 -5")); // Expected: "9 -5"

// ==========================================
// Task: Holiday VI - Shark Pontoon (8 kyu)
// ==========================================
// Description:
// Determine whether you can swim to the pontoon before the shark reaches you.
//
// Parameters:
// - pontoonDistance: Distance from you to the pontoon (meters)
// - sharkDistance: Distance from the shark to you (meters)
// - youSpeed: Your swimming speed (meters per second)
// - sharkSpeed: Shark's swimming speed (meters per second)
// - dolphin: Boolean (if true, shark speed is halved)
//
// Return:
// "Alive!" if you reach the pontoon before or at the same time as the shark reaches you.
// "Shark Bait!" if the shark reaches you first.

export function shark(
  pontoonDistance: number,
  sharkDistance: number,
  youSpeed: number,
  sharkSpeed: number,
  dolphin: boolean
): string {
   if(dolphin === true){
    sharkSpeed = sharkSpeed / 2 
  let myTime = pontoonDistance / youSpeed;
  let sharkTime = sharkDistance / sharkSpeed;
    if(myTime <= sharkTime){
      return "Alive!"
    }
    return "Shark Bait!";
  }
  
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(shark(12, 50, 4, 8, true));   // Expected: "Alive!"
console.log(shark(7, 55, 4, 16, true));   // Expected: "Alive!"
console.log(shark(24, 0, 4, 8, true));    // Expected: "Shark Bait!"

// ==========================================
// Task: Grasshopper - Terminal game move function (8 kyu)
// ==========================================
// Description:
// In this game, the hero moves from left to right.
// The player rolls the die and moves the number of spaces indicated by the die TWO TIMES.
//
// Create a function for the terminal game that takes the current position 
// of the hero and the roll (1-6) and return the new position.
//
// Examples:
// move(0, 4) ==> 8  (0 + 4 * 2)
// move(3, 6) ==> 15 (3 + 6 * 2)
// move(2, 5) ==> 12 (2 + 5 * 2)

export function move(pos: number, roll: number): number {
  
  return roll * 2 + pos;
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(move(0, 4)); // Expected: 8
console.log(move(3, 6)); // Expected: 15
console.log(move(2, 5)); // Expected: 12

// ==========================================
// Task: Even numbers in an array (7 kyu)
// ==========================================
// Description:
// Given an array of numbers, return a new array of length `number` 
// containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least `number` even numbers.
//
// Examples:
// evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) ==> [4, 6, 8]
// evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) ==> [-8, 26]
// evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) ==> [6]

export function evenNumbers(array: number[], n: number): number[] {
  let res: number[] = []

  for(let i= 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      res.push(array[i])
    }
  }
  let result: number[] = []
  for(let i = res.length - n; i < res.length; i++){
     result.push(res[i])
  }
  return result
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); 
// Expected: [4, 6, 8]

console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); 
// Expected: [-8, 26]

console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); 
// Expected: [6]

// ==========================================
// Task: Shortest Word (7 kyu)
// ==========================================
// Description:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
//
// Examples:
// findShort("bitcoin take over the world maybe who knows perhaps") ==> 3
// findShort("turns out random test cases are easier than writing out basic ones") ==> 3
// findShort("lets talk about javascript the best language") ==> 3
// findShort("i want to travel the world writing code one day") ==> 1

export function findShort(s: string): number {
 let res = s.split(' ')
for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[i].length > res[j].length) {
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
      }
    }
  }

  return res[0].length;
 } 
 


 

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // Expected: 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // Expected: 3
console.log(findShort("lets talk about javascript the best language")); // Expected: 3
console.log(findShort("i want to travel the world writing code one day")); // Expected: 1

// ==========================================
// Task: Switcheroo (7 kyu)
// ==========================================
// Description:
// Given a string made up of letters a, b, and/or c, switch the position 
// of letters a and b (change a to b and vice versa). 
// Leave any incidence of c untouched.
//
// Examples:
// switcheroo('acb')      ==> 'bca'
// switcheroo('aabacbaa') ==> 'bbabcabb'
// switcheroo('ccccc')    ==> 'ccccc'

export function switcheroo(x: string): string {
  let res = x.split('')
  let result: string[] = []
  for(let i = 0; i < res.length; i++){
    if(res[i] === 'a'){
      result.push('b')
    }else if(res[i] === 'b'){
      result.push('a')
    } else {
      result.push('c')
    }
  }
  return result.join('');
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(switcheroo('acb'));      // Expected: 'bca'
console.log(switcheroo('aabacbaa')); // Expected: 'bbabcabb'
console.log(switcheroo('ccccc'));    // Expected: 'ccccc'


// ==========================================
// Task: Plural (8 kyu)
// ==========================================
// Description:
// We need a simple function that determines if a plural is needed or not. 
// It should take a number, and return true if a plural should be used 
// with that number or false if not.
//
// In English grammar rules for this kata, anything that isn't singular (1),
// is plural.
//
// Examples:
// plural(0)        ==> true  (0 apples)
// plural(0.5)      ==> true  (0.5 apples)
// plural(1)        ==> false (1 apple)
// plural(100)      ==> true  (100 apples)
// plural(Infinity) ==> true

export function plural(n: number): boolean {
  
  return  n > 1 || n < 1 ? true : false;
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(plural(0));        // Expected: true
console.log(plural(0.5));      // Expected: true
console.log(plural(1));        // Expected: false
console.log(plural(100));      // Expected: true
console.log(plural(Infinity)); // Expected: true

// ==========================================
// Task: Detect Pangram (6 kyu)
// ==========================================
// Description:
// A pangram is a sentence that contains every single letter of the alphabet 
// at least once. Case is irrelevant. Ignore numbers and punctuation.
//
// Examples:
// isPangram("The quick brown fox jumps over the lazy dog.") ==> true
// isPangram("Cwm fjord bank glyphs vext quiz") ==> true
// isPangram("This is not a pangram.") ==> false

export const isPangram = (phrase: string): boolean => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = phrase.toLowerCase().split('')
  let total = []

  for(let i = 0; i < alphabet.length; i++){
    for(let j = 0; j < res.length; j++){
     if(alphabet[i] === res[j]){
      total.push(alphabet[i])
      break
    }  
    }
     } 
    return total.length === alphabet.length
  }
// ==========================================
// Quokka.js Tests
// ==========================================
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // Expected: true
console.log(isPangram("Cwm fjord bank glyphs vext quiz"));            // Expected: true
console.log(isPangram("This is not a pangram."));                     // Expected: false

// ==========================================
// Task: Sum Mixed Array (8 kyu)
// ==========================================
// Description:
// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.
// Return your answer as a number.
//
// Examples:
// sumMix([9, 3, '7', '3'])                             ==> 22
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])            ==> 42
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])       ==> 41

export function sumMix(x: (string | number)[]): number {

  let res = x.map((item) => {
    return Number(item)
  });
  let total = 0
for(let i = 0; i < res.length; i++){
total+= res[i]
}
  return total
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(sumMix([9, 3, '7', '3']));                       // Expected: 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));      // Expected: 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // Expected: 41

// ==========================================
// Task: Bumps in the Road (7 kyu)
// ==========================================
// Description:
// Your car is old, it breaks easily. The shock absorbers are gone and you think 
// it can handle about 15 more bumps before it dies totally.
//
// Given a string showing either flat road (_) or bumps (n). 
// If you are able to reach home safely by encountering 15 bumps or less, 
// return "Woohoo!", otherwise return "Car Dead".
//
// Examples:
// bump("n") ==> "Woohoo!"
// bump("_nn_nnnn__n_n___nn_nnn") ==> "Woohoo!"
// bump("______n___n_") ==> "Woohoo!"
// bump("nnnnnnnnnnnnnnnnnnnnn") ==> "Car Dead"

export function bump(x: string): string {
  let res = x.split('')
  let total: string[] = []
  for(let i = 0; i < res.length; i++){
     if(res[i] === 'n'){
        total.push(res[i])
     }
  } if(total.length <= 15){
    return "Woohoo!"
  }
  return "Car Dead";
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(bump("n"));                         // Expected: "Woohoo!"
console.log(bump("_nn_nnnn__n_n___nn_nnn"));    // Expected: "Woohoo!"
console.log(bump("______n___n_"));             // Expected: "Woohoo!"
console.log(bump("nnnnnnnnnnnnnnnnnnnnn"));     // Expected: "Car Dead"

// ==========================================
// Task: Sum of differences in array (8 kyu)
// ==========================================
// Description:
// Your task is to sum the differences between consecutive pairs 
// in the array in descending order.
//
// Examples:
// sumOfDifferences([2, 1, 10]) ==> 9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//
// If the array is empty or the array has only one element, 
// the result should be 0.

export function sumOfDifferences(arr: number[]): number {
 let sortArr = arr.sort((a, b) => a -b).reverse()
 let res: number[] = [] 
 for(let i = 0; i < sortArr.length - 1; i++){
  res.push(sortArr[i] - sortArr[i + 1])
 }
  
  return res.reduce((acc, current) => acc + current, 0
);
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(sumOfDifferences([2, 1, 10])); // Expected: 9
console.log(sumOfDifferences([-3, -2, -1])); // Expected: 2
console.log(sumOfDifferences([1]));        // Expected: 0
console.log(sumOfDifferences([]));         // Expected: 0


// ==========================================
// Task: Printer Errors (7 kyu)
// ==========================================
// Description:
// In a factory a printer prints labels for boxes. For one kind of boxes 
// the printer has to use colors which, for the sake of simplicity, 
// are named with letters from 'a' to 'm'.
//
// A "good" control string contains only letters from 'a' to 'm'.
// Sometimes there are problems and a "bad" control string is produced, 
// containing letters NOT from 'a' to 'm' (e.g. 'n' to 'z').
//
// You have to write a function printerError which given a string 
// will return the error rate of the printer as a string representing 
// a rational: "number_of_errors / length_of_string".
//
// Examples:
// s = "aaabbbbhaijjjm" 
// printerError(s) ==> "0/14"
//
// s = "aaaxbbbbyyhwawiwjjjwwm"
// printerError(s) ==> "8/22"

export function printerError(s: string): string {
const invalidLetters = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let newarray = s.split('')
let res: string[] = []
for(let i = 0; i < newarray.length; i++){
    for (let j = 0; j < invalidLetters.length; j++){
    if(newarray[i] === invalidLetters[j]){
      res.push(newarray[i])
    }  
  }
}

  return `${res.length}/${newarray.length}`;
}


// ==========================================
// Quokka.js Tests
// ==========================================
let stest1 = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(stest1)); // Expected: "3/56"

let stest2 = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(stest2)); // Expected: "8/22"


// ==========================================
// Task: You only need one - Beginner (8 kyu)
// ==========================================
// Description:
// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value.
//
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
//
// Examples:
// check([66, 101], 66)           ==> true
// check(['what', 'a', 'great'], 'kat') ==> false

export const check = (a: (number | string)[], x: number | string): boolean => {
   return a.includes(x) ? true : false
  //return false;
};

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(check([66, 101], 66));                      // Expected: true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // Expected: true
console.log(check(['t', 'e', 's', 't'], 'e'));          // Expected: true
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));   // Expected: false

// ==========================================
// Task: Maximum Product (7 kyu)
// ==========================================
// Description:
// Given an array of integers, Find the maximum product obtained 
// from multiplying 2 adjacent numbers in the array. 
// Note that the array size is at least 2 and consists 
// of a mixture of positive, negative integers and also zeroes.
//
// Examples:
// adjacentElementsProduct([1, 2, 3])                 ==> 6   (2 * 3)
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])==> 50  (5 * 10)
// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) ==> -14 (-2 * 7)

export function adjacentElementsProduct(arr: number[]): number {

let res: number[] = []

  for(let i = 0; i < arr.length - 1; i++){
     res.push(arr[i]*arr[i + 1])
  }
  
  for(let i = 0; i < res.length; i++){
    if(res[0] < res[i]){
      let temp = res[0]
      res[0] = res[i]
      res[i] = temp
    }
  }
  return res[0];
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(adjacentElementsProduct([5, 8]));                   // Expected: 40
console.log(adjacentElementsProduct([1, 2, 3]));                // Expected: 6
console.log(adjacentElementsProduct([1, 5, 10, 9]));            // Expected: 90
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // Expected: -14

// ==========================================
// Task: List Filtering (7 kyu)
// ==========================================
// Description:
// In this kata you will create a function that takes a list 
// of non-negative integers and strings and returns a new list 
// with the strings filtered out.
//
// Examples:
// filter_list([1, 2, 'a', 'b'])             ==> [1, 2]
// filter_list([1, 'a', 'b', 0, 15])         ==> [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) ==> [1, 2, 123]

export function filter_list1(l: Array<any>): Array<number> {

  let res: number[] = []

  for(let i = 0; i < l.length; i++){
if(l[i] === (Number(l[i]))){
  res.push(l[i])
}
  }
  return res;
}

// ======== res==================================
// Quokka.js Tests
// ==========================================
console.log(filter_list1([1, 2, 'a', 'b']));             // Expected: [1, 2]
console.log(filter_list1([1, 'a', 'b', 0, 15]));         // Expected: [1, 0, 15]
console.log(filter_list1([1, 2, 'aasf', '1', '123', 123])); // Expected: [1, 2, 123]


// ==========================================
// Task: Buying a car (6 kyu)
// ==========================================
// Description:
// A man has a old car worth $2000 and wants to buy a new one worth $8000.
// He saves $1000 each month.
// Both cars lose value by a loss percentage (initially 1.5% per month).
// Every two months, this loss percentage increases by 0.5%.
//
// You need to return an array/tuple [months, leftover_money]
// rounded to the nearest integer.
//
// Examples:
// nbMonths(2000, 8000, 1000, 1.5) ==> [6, 766]
// nbMonths(12000, 8000, 1000, 1.5) ==> [0, 4000]

export function nbMonths(
  startPriceOld: number,
  startPriceNew: number,
  savingperMonth: number,
  percentLossByMonth: number
): number[] {
  let months = 0;
  let savings = 0;
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  let percent = percentLossByMonth;

  while (priceOld + savings < priceNew) {
    months++;

        if (months % 2 === 0) {
      percent += 0.5;
    }

       savings += savingperMonth;

        priceOld -= priceOld * (percent / 100);
    priceNew -= priceNew * (percent / 100);
  }

    const leftover = Math.round(priceOld + savings - priceNew);

  return [months, leftover];
}

// ==========================================
// Quokka.js Tests
// ==========================================
console.log(nbMonths(2000, 8000, 1000, 1.5)); // Expected: [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // Expected: [0, 4000]

