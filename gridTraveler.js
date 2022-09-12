// only right and down moves, no diagonal
function gridTraveler(m, n, memo = {}) {
  const key = `${m}, ${n}`;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) {
    // invalid grid
    return 0;
  } else if (m === 1 && n === 1) {
    // base case grid, means you found a path
    return 1;
  }
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveler(18, 18));
