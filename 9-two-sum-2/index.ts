export {}

function twoSum(nums: number[], target: number): number[] {
	let left: number = 0
	let right: number = nums.length - 1

	while (left < right) {
		const sum: number = nums[left] + nums[right]

		if (sum > target) {
			right--
		} else if (sum < target) {
			left++
		} else {
			return [left + 1, right + 1]
		}
	}

	return []
}

const nums = [2, 7, 11, 15]
const target = 26
const result = twoSum(nums, target)

console.log(result)

/*
STEPS:

1. Initialize left and right to the first and last index of the input array, respectively

2. While left is less than right:
    a. Calculate the sum of the two elements at indices left and right
    b. If the sum is greater then the target, decrement right
    c. If the sum is less than the target, increment left
    d. Otherwise, return the current left and right indices

3. If the loop completes without returning, return an empty array
*/
