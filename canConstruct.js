function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // indexOf() returns starting index of a substring within a string
      // in our case we use it to check if a substring is a prefix of a string
      const suffix = target.slice(word.length); // the target word excluding the prefix found by starting at index word.length to the end
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
