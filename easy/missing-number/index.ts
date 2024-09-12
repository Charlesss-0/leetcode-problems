export {}

function missingNumber(nums: number[]): number {
	let res: number = nums.length

	for (let i = 0; i < nums.length; i++) {
		res += i - nums[i]
	}

	return res
}

const nums = [3, 0, 1]
const result = missingNumber(nums)

console.log(result)

/*
STEPS:

1. Initialize res to the length of the input array

2. Iterate over the input array from 0 to the length of the array
	a. Subtract the current index from the current element and add it to res

3. Return res
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
