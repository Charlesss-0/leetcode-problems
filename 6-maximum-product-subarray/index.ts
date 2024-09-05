export {}

function maxProduct(nums: number[]): number {
	let result: number = Math.max(...nums)

	let maxProduct: number = 1
	let minProduct: number = 1

	for (let n of nums) {
		let tempMax: number = maxProduct * n

		maxProduct = Math.max(n * maxProduct, n * minProduct, n)
		minProduct = Math.min(tempMax, n * minProduct, n)

		result = Math.max(result, maxProduct)
	}

	return result
}

const nums = [2, 3, -2, 4]
const result = maxProduct(nums)

console.log(result)

/*
STEPS:

1. Initialize result with the maximum number

2. Initialize maxProduct, minProduct to 1

3. Iterate through the array starting from zero to the length of the array

4. Check if current number is zero, and reset previous maxProduct, minProduct to 1

5. Temporarily store the previous maxProduct times the current number

6. Update maxProduct: maximum of the current number times the previous maxProduct,
	current number times the minProduct, or current number

7. Update minProduct: previous maxProduct (tempMax),
	current number times the previous minProduct, or current number

8. Update result: maximum result,
	maximum value found so far

9. Return the maximum product found
*/
