function rec_binary_search(arr, target, start, end) {
  // arr must be sorted
  // recursive binary search implementation
  if (start > end) {
    return "Target not found!";
  } else {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `Target found at index ${mid}`;
    } else if (arr[mid] < target) {
      return rec_binary_search(arr, target, mid + 1, end);
    } else if (arr[mid] > target) {
      return rec_binary_search(arr, target, start, mid - 1);
    }
  }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // must have different arrays since splice modified the inputted array directly
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rec_binary_search(arr1, 12, 0, 9));
console.log(rec_binary_search(arr2, 2, 0, 9));

function binary_search(arr, target) {
  // O(log(n))
  // iterative binary search implementation
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    console.log(mid);
    if (arr[mid] === target) {
      return `Target found at index ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return "Target not found!";
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search(arr3, 12));
console.log(binary_search(arr3, 2));
