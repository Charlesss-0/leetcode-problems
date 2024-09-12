export {}

function productExceptSelf(nums: number[]): number[] {
	let result: number[] = [...Array(nums.length).fill(1)]

	let prefix: number = 1
	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix
		prefix *= nums[i]
	}

	let suffix: number = 1
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= suffix
		suffix *= nums[i]
	}

	return result
}

const nums = [1, 2, 3, 4]
const result = productExceptSelf(nums)

console.log(result)

/*
STEPS:

1. Initialize an empty array of the same length as the input array,
	and fill it with 1

2. Initialize prefix to 1

3. Iterate through the input array starting from zero to the length of the array

4. Update the current element in the result array with the prefix

5. Update the prefix with the current element multiplied by the prefix

6. Initialize suffix to 1

7. Iterate through the input array starting from the length of the array to zero (reverse)

8. Update the current element in the result array multiplied by the suffix

9. Update the suffix with the current element multiplied by the suffix

10. Return the result array
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
