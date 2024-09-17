export {}

function lengthOfLIS(nums: number[]): number {
	let list: number[] = new Array(nums.length).fill(1)

	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] < nums[j]) {
				list[i] = Math.max(list[i], 1 + list[j])
			}
		}
	}

	return Math.max(...list)
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
const result = lengthOfLIS(nums)

console.log(result)

/*
STEPS:

1. Create a list of size of nums

2. Iterate through the input array starting from the last index

3. Iterate through the input array starting from the next index:
	a. If the current element is less than the next element,
		update the value of the current index to the max of the current value and the next value

4. Return the max value of the list
*/

// Time Complexity: O(n^2)
// Space Complexity: O(n)
