export {}

function search(nums: number[], target: number): number {
	let left: number = 0
	let right: number = nums.length - 1

	while (left <= right) {
		const mid: number = Math.floor((left + right) / 2)

		if (nums[mid] === target) {
			return mid
		}

		if (nums[left] <= nums[mid]) {
			if (target > nums[mid] || target < nums[left]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		} else {
			if (target < nums[mid] || target > nums[right]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		}
	}

	return -1
}

const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 2
const result = search(nums, target)

console.log(result)

/*
STEPS:

1. Initialilze left and right pointer starting from the first and last index of the input array respectively

2. While left pointer is less than or equal to right pointer:
    a. Calculate mid pointer
    b. If current value at mid index is equal to target,
        return current mid value
    c. If current value at the left index is less than or equal to current value at the mid index,
        if target is greater than current value at the mid index or target is less than current value at left index,
            update left pointer to the mid index plus 1,
        otherwise, update right pointer to the mid index minus 1
    d. Otherwise,
        if target is less than current value at mid index or target is greater than current value at right index,
            update right pointer to mid index minus 1,
        otherwise, update left pointer to mid index plus 1

3. Return negative 1
*/

// Time Complexity: O(log(n))
// Space Complexity: O(1)
