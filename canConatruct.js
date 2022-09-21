function canConstruct(target, wordBank) {
  if (target === " ") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // indexOf() returns starting index of a substring within a string
      // in our case we use it to check if a substring is a prefix of a string
      const suffix = target.slice(word.length); // the target word excluding the prefix found by starting at index word.length to the end
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
}
