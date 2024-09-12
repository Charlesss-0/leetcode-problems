export {}

function maxArea(heights: number[]): number {
	let max: number = 0
	let left: number = 0
	let right: number = heights.length - 1

	while (left < right) {
		const area = Math.min(heights[left], heights[right]) * (right - left)
		max = Math.max(max, area)

		if (heights[left] < heights[right]) {
			left++
		} else if (heights[left] >= heights[right]) {
			right--
		}
	}

	return max
}

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const result = maxArea(nums)

console.log(result)

/*
STEPS:

1. Initialize max result to 0

2. Initialize left and right pointers to the first and last index of the input array, respectively

3. While left pointer is less than right pointer:
    a. Calculate the area of the container by multiplying the minimum height between (right - left)
    b. Update max result if the area is greater than the current max result
    c. If the height at left is less than the height at right, increment left pointer
    d. Otherwise, decrement right pointer

4. Return max result
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
