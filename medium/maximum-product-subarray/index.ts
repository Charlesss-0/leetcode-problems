export {}

function maxProduct(nums: number[]): number {
	let result: number = Math.max(...nums)

	let maxProduct: number = 1
	let minProduct: number = 1

	for (let i = 0; i < nums.length; i++) {
		let tempMax: number = maxProduct * nums[i]

		maxProduct = Math.max(nums[i] * maxProduct, nums[i] * minProduct, nums[i])
		minProduct = Math.min(tempMax, nums[i] * minProduct, nums[i])

		result = Math.max(result, maxProduct)
	}

	return result
}

const nums = [2, 3, -2, 4]
const result = maxProduct(nums)

console.log(result)

/*
STEPS:

1. Initialize result with the maximum number in the input array

2. Initialize maxProduct, minProduct to 1

3. Iterate through the input array starting from zero to the length of the array

4. Temporarily store maxProduct times current number

5. Update maxProduct: maximum of current number times maxProduct,
	current number times minProduct, or current number

6. Update minProduct: previous maxProduct (tempMax),
	current number times minProduct, or current number

7. Update result: maximum of result,
	maximum value found so far

8. Return the maximum product found
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
