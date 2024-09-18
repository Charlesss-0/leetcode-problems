function longestCommonSubsequence(text1: string, text2: string): number {
	let dp: number[][] = Array.from({ length: text1.length + 1 }, () =>
		new Array(text2.length + 1).fill(0)
	)

	for (let i = text1.length - 1; i >= 0; i--) {
		for (let j = text2.length - 1; j >= 0; j--) {
			if (text1[i] === text2[j]) {
				dp[i][j] = 1 + dp[i + 1][j + 1]
			} else {
				dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
			}
		}
	}

	return dp[0][0]
}

const text1 = 'abcde'
const text2 = 'ace'

console.log(longestCommonSubsequence(text1, text2))

/*
STEPS:

1. Create a 2D array of size (text1.length + 1) x (text2.length + 1) and initialize all values to 0.

2. Iterate through the first string from the end to the beginning.

3. Iterate through the second string from the end to the beginning.

4. If the characters at the current indices are the same, then increment the value at the current index by 1 and update the value at the previous index by 1.

5. If the characters at the current indices are different, then update the value at the current index by the maximum of the values at the current index and the previous index.

6. Return the value at the top-left corner of the array.
*/

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
