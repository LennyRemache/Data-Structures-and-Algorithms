function linear_search(arr, target) {
  // O(n)
  /*
    Returns the index position of the target if found, else returns null
  */
  for (let i = 0; i < arr.length; i++) {
    // check each element in each position starting at index 0
    if (arr[i] === target) {
      // check if current value at position i is the target
      return `Target found at index ${i}`; // return position of target in array if the target is found
    }
  }
  return "Target not found!";
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linear_search(testArr, 12));
console.log(linear_search(testArr, 6));
