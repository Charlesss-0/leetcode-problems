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
