function litres(time: number): number {
    return Math.floor(time * 0.5)
}
console.log(litres(5))

// 8.2    Given a month as an integer from 1 to 12, return which quarter of the year it belongs to as an integer from 1 to 4.
// Task: Quarter of the year (8 kyu)

export function quarterOf(month: number): number {
  if (month <= 3){
    return 1
  }
    else if (month > 3 && month <=6){
    return 2
  }
    else if (month > 6 && month <=9){
    return 3
  }
    else {
        return 4
    }
}


console.log(quarterOf(3));  // result: 1
console.log(quarterOf(8));  // result: 3
console.log(quarterOf(11)); // result: 4

// Task: Quarter of the year (8 kyu)

export function quarterOfTernarny(month: number): number {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}


console.log(quarterOf(3));  // result: 1
console.log(quarterOf(8));  // result: 3
console.log(quarterOf(11)); // result: 4


// 8.3  Write a function that accepts three parameters: cap (capacity), on (number of people already on board), and wait (number of people waiting). Return 0 if there is enough space for all waiting passengers. If there isn't enough space, return the number of passengers who cannot fit.


// --- Standard Approach (if / else) ---
export function enough(cap: number, on: number, wait: number): number {
  const result = (on + wait) - cap;
if((on + wait) <= cap){
  return 0;
} else {return result}
  
}


// --- Ternary Operator Solution ---
export function enoughTernary(cap: number, on: number, wait: number): number {
 const result = (on + wait) - cap;
 return on + wait <= cap ? 0 : on + wait - cap;
 
}

// --- Test Cases ---
console.log(enough(10, 5, 5));   // Expected result: 0  (Места хватило всем)
console.log(enough(100, 60, 50));// Expected result: 10 (Не поместились 10 человек)
console.log(enough(50, 15, 10)); // Expected result: 0  (Места хватило всем)

console.log(enoughTernary(10, 5, 5));   // Expected result: 0
console.log(enoughTernary(100, 60, 50));// Expected result: 10
console.log(enoughTernary(50, 15, 10)); // Expected result: 0

// 8.3 Given a set of numbers, return the additive inverse of each. Each positive becomes negative, and the negative becomes positive. Return an empty array if the input array is empty.

// Task: Invert values (8 kyu)

// --- Standard Approach (for Loop) ---
export function invert(array: number[]): number[] {
  
  const result: number[] = [];
  for(let item of array){
  const a = item*(-1)
  result.push(a)
 
} return result
}

// --- Map Method with Ternary Operator ---
export function invertTernary(array: number[]): number[] {
  return array.map((x) => -x);
}

// --- Test Cases ---
console.log(invert([1, 2, 3, 4, 5]));   // Expected result: [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5]));  // Expected result: [-1, 2, -3, 4, -5]
console.log(invert([]));                 // Expected result: []

console.log(invertTernary([1, 2, 3, 4, 5]));   // Expected result: [-1, -2, -3, -4, -5]
console.log(invertTernary([1, -2, 3, -4, 5]));  // Expected result: [-1, 2, -3, 4, -5]
console.log(invertTernary([])); 


// 8.4 Given a sorted list of unique numbers, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Task: Lario and Muigi Pipe Problem (8 kyu)

// --- Standard Approach (for Loop) ---
export function pipeFix(numbers: number[]): number[] {
  let res:  number[] = []
   for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
    res.push(i)
   }return res
}


// --- Test Cases ---
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(pipeFix([1, 2, 3, 12]));         // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(pipeFix([-1, 4]));              // Expected: [-1, 0, 1, 2, 3, 4]


//         -- 7 kyu --

// 7.5 Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// Task: Sort Numbers (7 kyu)

// --- Solution ---
export function solution(nums: number[] | null): number[] {
  //const res = nums.sort((a, b) => b - a)
   
  
  return nums ? nums.sort((a, b) => a - b) : []
}

// --- Test Cases ---
console.log(solution([1, 2, 10, 50, 5])); // Expected: [1, 2, 5, 10, 50]
console.log(solution([]));                 // Expected: []
console.log(solution(null));               // Expected: []



// 7.6 Task: Sum all digits of a number (ignore negative sign)
// Example: -32 -> 3 + 2 = 5
export function sumDigits(n: number): number {
  const a = Math.abs(n)
  const res = String(a).split('')
  return res.reduce((acc, current) => {
    return acc + Number(current)
  }, 0)
}

export function sumDigits2(n: number): number {
  return String(Math.abs(n))
    .split('')
    .reduce((acc, current) => acc + Number(current), 0);
}

// Quokka check:
console.log(sumDigits(10));  // Expected: 1
console.log(sumDigits(99));  // Expected: 18
console.log(sumDigits(-32)); // Expected: 5


// Task: Convert an array of 0s and 1s representing a binary number to an integer.
// Example: [0, 1, 0, 1] -> 5

export function binaryArrayToNumber(arr: number[]): number {
  return arr.reduce((acc, current) => {
    return acc * 2 + current
  })
}

// Quokka check:
console.log(binaryArrayToNumber([0, 0, 0, 1])); // Expected: 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Expected: 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // Expected: 5
console.log(binaryArrayToNumber([1, 1, 1, 1])); // Expected: 15


// Task: Filter the array `birds` to remove all strings present in `geese`.

export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for(let i = 0; i < birds.length; i++){
    
  }
  // Your code here
}

// Quokka check:
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
// Expected output: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));
// Expected output: []

export function position(alphabet: string): string {
  let str = "abcdefghijklmnopqrstuvwxyz"
  let arr = str.split('')
  let result = ''
  
  for(let i = 0; i < arr.length; i++){
    if(alphabet == arr[i]){
      result += i + 1
    }
  }

  return `Position of alphabet: ${result}`;
}

// Проверки для Quokka:
console.log(position("a")); // Ожидается: "Position of alphabet: 1"
console.log(position("z")); // Ожидается: "Position of alphabet: 26"
console.log(position("e")); // Ожидается: "Position of alphabet: 5"

// You are given an array of integer pairs [on, off]. Each pair represents the number of people who get on the bus (first item) and the number of people who get off the bus (second item) at a stop.

// Return the total number of people remaining on the bus after the last stop.

export function number(busStops: [number, number][]): number {
  let result = 0
let res = 0

  for(let i = 0; i < busStops.length; i++){
    result += busStops[i][0]
    res += busStops[i][1]
  }
    return result - res

} 
// Проверки для Quokka:
console.log(number([[10, 0], [3, 5], [5, 8]])); // Ожидается: 5
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); // Ожидается: 17
console.log(number([[0, 0]])); // Ожидается: 0


export const summation = (num: number): number => {
  let res = 0
for(let i = 0;  i <= num; i++){
 res +=i
}return res
  
}

console.log(summation(1)); // Expected: 1
console.log(summation(2)); // Expected: 3 (1 + 2)
console.log(summation(8)); // Expected: 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


export const addLength = (str: string): string[] => {
  const result = str.split(' ')
  
  for(let i = 0; i < result.length; i++){
    let num = 0
    for(let j = 0; j < result[i].length; j++){
       num += 1
       
    }
    result[i] = result[i] + ' ' + num;
  } 
  return result
}

console.log(addLength('apple ban')); // Expected: ["apple 5", "ban 3"]
console.log(addLength('you will win')); // Expected: ["you 3", "will 4", "win 3"]

export class Kata {
  static validatePin(pin: string): boolean {
    if (pin.length === 4 && Number(pin)){
      return true
    } else {
      return false
    }
     
  }
}

console.log(Kata.validatePin("1234")); // Expected: true
console.log(Kata.validatePin("12345")); // Expected: false
console.log(Kata.validatePin("a234")); // Expected: false
console.log(Kata.validatePin("123456")); // Expected: true
console.log(Kata.validatePin("-1234")); // Expected: false
console.log(Kata.validatePin("1.234")); // Expected: false

// Task: Powers of 2 (8 kyu)
// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

export function powersOfTwo(n: number): number[] {
    let result: number[] = []
  for(let i = 0; i <= n; i++){
    result.push(2 ** i);
    
  }
  return result;
  
}

// Quokka.js test cases
console.log('n = 0:', powersOfTwo(0)); // Expected output: [1]
console.log('n = 1:', powersOfTwo(1)); // Expected output: [1, 2]
console.log('n = 4:', powersOfTwo(4)); // Expected output: [1, 2, 4, 8, 16]

// Task: Jaden Casing Strings (7 kyu)
// Convert strings to how they would be written by Jaden Smith (capitalize every word).

interface String {
  toJadenCase(): string;
}

String.prototype.toJadenCase = function (this: string): string {
  const a: string[] = this.split(' ')
  return a[0].toUpperCase() + a.slice(1);
};

// Quokka.js test cases
const testPhrase = "How can mirrors be real if our eyes aren't real";
console.log(testPhrase.toJadenCase());
// Expected: "How Can Mirrors Be Real If Our Eyes Aren't Real"