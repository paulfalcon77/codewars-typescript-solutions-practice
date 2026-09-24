// ==========================================
// TASK 1: Find Index of Minimum Element
// ==========================================
// Example: [7, 3, 9, 1, 5] -> min element is 1, its index is 3.

export function findMinIndex(arr: number[]): number {
  let minIndex = 0; 

  for (let i = 1; i < arr.length; i++) {
    if(arr[minIndex] > arr[i]){
        minIndex = i
    }
        
  } return minIndex;

  
}


// export const findMinIndexShort = (arr: number[]): number => arr.indexOf(Math.min(...arr));

// Quokka check:
console.log(findMinIndex([7, 3, 9, 1, 5])); // Expected output: 3
console.log(findMinIndex([10, 20, 5, 8]));  // Expected output: 2

// ==========================================
// TASK 2: Selection Sort
// ==========================================
// Description: Sort array of numbers in ascending order using Selection Sort algorithm.
// Example: [29, 10, 14, 37, 14] -> [10, 14, 14, 29, 37]

// Function Name: selectionSort

// Quokka check:
// console.log(selectionSort([29, 10, 14, 37, 14]));

export function selectionSort(arr: number[]): number[]{
 for(let i = 0; i < arr.length; i++){
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++){
        if(arr[minIndex] > arr[j]){
            minIndex = j
        }
    }
    let temp = arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex] = temp

 } 
 return arr
}

console.log(selectionSort([29, 10, 14, 37, 14])); // Expected: [10, 14, 14, 29, 37]
console.log(selectionSort([5, 4, 3, 2, 1]));      // Expected: [1, 2, 3, 4, 5]
console.log(selectionSort([1, 2, 3, 4, 5]));      // Expected: [1, 2, 3, 4, 5]
console.log(selectionSort([-3, 0, 2, -10]));      // Expected: [-10, -3, 0, 2]
console.log(selectionSort([42]));                 // Expected: [42]


//Bubble Sort
//Description: Sort an array of numbers in ascending order using the Bubble Sort algorithm.
export function bubbleSort(arr: number[]): number[]{
  for(let i = 0; i < arr.length; i++){
    
    for(let j = i + 1; j < arr.length;  j++){
      if(arr[i] > arr[j]){
        
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp
      }
    }
    
  }
return arr
}

console.log(bubbleSort([29, 10, 14, 37, 14])); // Expected: [10, 14, 14, 29, 37]
console.log(bubbleSort([5, 4, 3, 2, 1]));      // Expected: [1, 2, 3, 4, 5]
console.log(bubbleSort([1, 2, 3, 4, 5]));      // Expected: [1, 2, 3, 4, 5]
console.log(bubbleSort([-3, 0, 2, -10]));      // Expected: [-10, -3, 0, 2]
console.log(bubbleSort([42]));                 // Expected: [42]

export function bubbleSort2(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
   
    for (let j = 0; j < arr.length - 1 - i; j++) {
      
      if (arr[j] > arr[j + 1]) {
        
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

    }
  }

  return arr;
}

console.log(bubbleSort([29, 10, 14, 37, 14])); // Expected: [10, 14, 14, 29, 37]
console.log(bubbleSort([5, 4, 3, 2, 1]));      // Expected: [1, 2, 3, 4, 5]
console.log(bubbleSort([1, 2, 3, 4, 5]));      // Expected: [1, 2, 3, 4, 5]
console.log(bubbleSort([-3, 0, 2, -10]));      // Expected: [-10, -3, 0, 2]
console.log(bubbleSort([42]));                 // Expected: [42]

//TASK 4: Insertion Sort
//Description: Sort an array of numbers in ascending order using the Insertion Sort algorithm.

export function insertionSort(arr: number[]): number[] {
 
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
   
    arr[j + 1] = current;
  }
  
  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14])); 
//  [10, 14, 14, 29, 37]

console.log(insertionSort([29, 10, 14, 37, 14])); // Expected: [10, 14, 14, 29, 37]
console.log(insertionSort([5, 4, 3, 2, 1]));      // Expected: [1, 2, 3, 4, 5]
console.log(insertionSort([1, 2, 3, 4, 5]));      // Expected: [1, 2, 3, 4, 5]
console.log(insertionSort([-3, 0, 2, -10]));      // Expected: [-10, -3, 0, 2]
console.log(insertionSort([42]));                 // Expected: [42]

// --- TRAINING TASK 1: Flatten Array with Loops ---
// Task: Take a two-dimensional array of numbers and return a flat one-dimensional array.
// Example: [[1, 2], [3, 4]] -> [1, 2, 3, 4]

function flattenLoop(inputArray: number[][]): number[] {
  const result: number[] = [];

  
  for (let i = 0; i < inputArray.length; i++) {
    

    for (let j = 0; j < inputArray[i].length; j++) {
      result.push(inputArray[i][j])

    }
  }

  return result;
}

// Quokka check:
console.log(flattenLoop([[1, 2], [3, 4]]));         // Expected: [1, 2, 3, 4]
console.log(flattenLoop([[3, 2, 1], [], [4, 6, 5]])); // Expected: [3, 2, 1, 4, 6, 5]

// --- TRAINING TASK 2: Sort Numbers Ascending ---
// Task: Take an array of numbers and return a new sorted array in ascending order.
// Crucial: Make sure it sorts numbers like 100 correctly!
// Hint: Use '.sort((a, b) => a - b)'

function sortNumbers(arr: number[]): number[] {

  // To avoid mutating the original array, we can copy it first using spread operator [...arr]
  const arrayCopy = [...arr];
  let result = arrayCopy.sort((a, b) => a - b);
  return result;
}
  
  // Your code here: sort 'arrayCopy' and return it
  
  

// Quokka check:
console.log(sortNumbers([3, 2, 1, 100, 4, 25])); 
// Expected output: [1, 2, 3, 4, 25, 100] 