function selection_sort(arr) {
  /*
    Find the index of the minimum number in the starting array. Push the array value at the min index 
    into the sorted array, and remove that value from the initial array. Repeat until the array is empty.
    O(n^2)
  */
  let sorted_arr = [];
  console.log(arr, sorted_arr);
  while (arr.length) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    sorted_arr.push(arr.splice(min, 1)[0]);
    console.log(arr, sorted_arr);
  }
  return sorted_arr;
}

console.log(selection_sort([1, 4, 4, 2, 9, 5, 0]));
