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

