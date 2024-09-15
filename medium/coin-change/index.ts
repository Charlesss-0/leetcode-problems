export {}

function coinChange(coins: number[], amount: number): number {
	let dp: number[] = new Array(amount + 1).fill(amount + 1)
	dp[0] = 0

	for (let i = 0; i < amount + 1; i++) {
		for (let coin of coins) {
			if (i - coin >= 0) {
				dp[i] = Math.min(dp[i], 1 + dp[i - coin])
			}
		}
	}

	if (dp[amount] !== amount + 1) {
		return dp[amount]
	} else {
		return -1
	}
}

const coins = [1, 2, 5]
const amount = 11

const result = coinChange(coins, amount)

console.log(result)

/*
STEPS:

1. Create a dp array of size amount + 1 and fill it with amount + 1

2. Initialize the first element of dp array to 0

3. Iterate over the amount + 1

4. Iterate over the coins array:
    a. If the current index - coin is greater than or equal to 0, update the dp array with the minimum of the current dp value and the value of dp at i - coin + 1

5. If the dp array at the amount is not equal to amount + 1, return the dp array at the amount

6. Otherwise, return -1
*/

// Time Complexity: O(n * m)
// Space Complexity: O(n)
