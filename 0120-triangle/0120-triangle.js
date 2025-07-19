/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  const n = triangle.length;
  // Copy the last row as our initial DP state
  const dp = triangle[n - 1].slice();

  // Iterate from the second‑to‑last row up to the first row
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // For each element, choose the smaller of its two children
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }

  // After processing row 0, dp[0] holds the minimum path sum
  return dp[0];
}

// Example usage:
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // 11
console.log(minimumTotal([[-10]]));            