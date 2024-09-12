export {}

function maxSubArray(nums: number[]): number {
	let maxSub: number = nums[0]
	let currentSub: number = 0

	for (let i = 0; i < nums.length; i++) {
		if (currentSub < 0) currentSub = 0

		currentSub += nums[i]

		maxSub = Math.max(maxSub, currentSub)
	}

	return maxSub
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const result = maxSubArray(nums)

console.log(result)

/*
STEPS:

1. Initialize maxSub to the first element of the input array

2. Initialize currentSub to 0

3. Iterate through the input array starting from zero to the length of the array

4. Check if currentSub is less than 0,
	set currentSub to 0

5. Update currentSub with the current element added to currentSub

6. Update maxSub with the maximum of maxSub and currentSub

7. Return maxSub
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
