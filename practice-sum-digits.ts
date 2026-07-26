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

