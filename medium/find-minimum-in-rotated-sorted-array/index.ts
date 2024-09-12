export {}

function findMin(nums: number[]): number {
	let left: number = 0
	let right: number = nums.length - 1

	while (left < right) {
		if (nums[left] <= nums[right]) {
			return nums[left]
		}

		const mid = Math.floor((left + right) / 2)

		if (nums[mid] > nums[right]) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return nums[left]
}

const nums = [3, 4, 5, 1, 2]
const result = findMin(nums)

console.log(result)

/*
STEPS:

1. Initialize left and right pointers to the first and last index of the array, respectively.

2. While left pointer is less than right pointer:
	a. If the current element at left index is less than or equal to the current element at right index, return the current element at left index
	b. Calculate the mid index of the input array
	c. If the current element at mid index is greater than the current element at right index, update left pointer to mid index + 1
	d. Otherwise, update right pointer to mid index

3. Return the element at left index
*/

// Time Complexity: O(log(n))
// Space Complexity: O(1)
