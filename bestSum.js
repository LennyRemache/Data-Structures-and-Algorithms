function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortest = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const output = bestSum(remainder, numbers, memo);
    if (output !== null) {
      memo[targetSum] = [...output, num];
      if (shortest === null || memo[targetSum].length < shortest.length) {
        shortest = memo[targetSum];
      }
    }
  }
  memo[targetSum] = shortest;
  return shortest;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
