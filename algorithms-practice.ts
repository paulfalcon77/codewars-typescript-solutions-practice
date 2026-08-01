// ==========================================
// ALGORITHMS PRACTICE: Nested Loops & Logic
// ==========================================

// --- TASK 1: Check for Duplicates ---
// Task: Return true if array contains any duplicate values, false otherwise.
// RESTRICTION: Do NOT use array methods (no includes, indexOf, etc.). Use only for loops!
// Example: [1, 2, 3, 1] -> true
// Example: [1, 2, 3, 4] -> false

export function hasDuplicates(arr: number[]): boolean {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
   if(arr[i] === arr[j]){
    return true
     }
    }
   }
  return false
}

// Quokka check:
console.log(hasDuplicates([1, 2, 3, 1])); // Expected: true
console.log(hasDuplicates([1, 2, 3, 4])); // Expected: false
console.log(hasDuplicates([5, 5, 1]));    // Expected: true


// Task: Count how many matching pairs exist in the array.
// Example: [1, 2, 3, 1] -> 1 pair
// Example: [1, 1, 2, 2] -> 2 pairs

export function countDuplicates(arr: number[]): number {
  let count = 0; 

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]){
            count +=1;
        }
      
    }
    return count
  }

  return count; 
}

// Quokka check:
console.log(countDuplicates([1, 2, 3, 4])); // Expected: 0
console.log(countDuplicates([1, 2, 3, 1])); // Expected: 1
console.log(countDuplicates([1, 1, 2, 2])); // Expected: 2

export function reverseArray(arr: number[]): number[] {
  const result: number[] = [];
  for(let i = (arr.length-1); i >= 0; i--){
    result[result.length] = arr[i]
  }return result
    
  // Напиши здесь цикл for, который начинается с (arr.length - 1)
  // и идет до 0 (i >= 0), уменьшая i (i--)

  return result;
}

// Quokka check:
console.log(reverseArray([10, 20, 30])); // Ожидаем: [30, 20, 10]