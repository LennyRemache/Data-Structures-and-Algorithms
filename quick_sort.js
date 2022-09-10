function partition(arr, pivot) {
  // O(n) time complexity
  let lessArr = [];
  let greaterArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      lessArr.push(arr[i]);
    } else {
      greaterArr.push(arr[i]);
    }
  }
  return { lessArr, greaterArr };
}

function quick_sort(arr) {
  // best case O(nlog(n)) worst case O(n^2), on average closer to best case if pivot is not first element
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0]; // select first value as pivot
  const { lessArr, greaterArr } = partition(arr, pivot);

  const left = quick_sort(lessArr);
  const right = quick_sort(greaterArr);

  return [...left, pivot, ...right];
}

console.log(quick_sort([10, 9, 4, 3, 3, 8, 5, 2]));
