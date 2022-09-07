function split(arr) {
  /*
    Divide the unsorted array at midpoint into sublists
    Return two sublists - left and right

    Takes overall O(log(n)) time
  */
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid, arr.length);
  return { leftHalf, rightHalf };
}

function merge(left, right) {
  /*
    Merges two arrays, sorting them in the process
    Returns a new merged array

    Takes overall O(n) times
  */
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function merge_sort(arr) {
  /*
    Sorts an array in ascending order
    Returns a new sorted array

    Divide: find the midpoint of the array and divide into sublists
    Conquer: recursively sort the sublists created in previous step
    Combine: merge the sorted sublists created in previous step

    Takes overall O(nlog(n)) time
  */
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  // divide
  const { leftHalf, rightHalf } = split(arr);

  //conquer
  const left = merge_sort(leftHalf);
  const right = merge_sort(rightHalf);

  //combine
  return merge(left, right);
}

let list = [54, 62, 93, 17, 77, 31, 44, 55, 20];
console.log(merge_sort(list));
