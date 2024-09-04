export {}
// Brute-Force solution
// function productExceptSelf(nums: number[]): number[] {
// 	let result: number[] = []

// 	for (let i = 0; i < nums.length; i++) {
// 		let product = 1

// 		for (let j = 0; j < nums.length; j++) {
// 			if (i !== j) {
// 				product = product * nums[j]
// 			}
// 		}

// 		result[i] = product
// 	}

// 	return result
// }

// Two pass solution
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
