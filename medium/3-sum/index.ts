export {}

function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b)
	const res: number[][] = []

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue

		let left: number = i + 1
		let right: number = nums.length - 1

		while (left < right) {
			const sum: number = nums[i] + nums[left] + nums[right]

			if (sum > 0) {
				right--
			} else if (sum < 0) {
				left++
			} else {
				res.push([nums[i], nums[left], nums[right]])

				while (left < right && nums[left] === nums[left + 1]) left++
				while (left < right && nums[right] === nums[right - 1]) right--

				left++
				right--
			}
		}
	}

	return res
}

const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums)

console.log(result)

/*
STEPS:

1. Sort the input array

2. Initialize empty result array

3. Iterate through the input array starting from zero to the length of the input array

4. If the current index is greater than 0 and the current number is the same as the previous number, skip it

5. Initialize left and right pointer to the first and last index of the input array, respectively

6. While left pointer is less than right pointer:
	a. Calculate the sum of the current number and the left and right numbers
	b. If the sum is greater than 0, move the right pointer to the left
	c. If the sum is less than 0, move the left pointer to the right
	d. If the sum is equal to 0, push the current number, left number, and right number to the result array,
	e. While the left pointer is less than the right pointer and the left pointer is equal to the left pointer + 1, increment the left pointer
	f. While the left pointer is less than the right pointer and the right pointer is equal to the right pointer - 1, decrement the right pointer
	g. Increment or decrement left and right pointers, respectively

7. Return the result array
*/

// Time Complexity: O(n^2)
// Space Complexity: O(n)
