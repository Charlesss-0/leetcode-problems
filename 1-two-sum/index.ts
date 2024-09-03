// Brute-Force Approach
// function twoSum(nums: number[], target: number): number[] {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [j, i]
// 			}
// 		}
// 	}

// 	return []
// }

// HashMap Approach
function twoSum(nums: number[], target: number): number[] {
	const hash = new Map()

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]

		if (hash.has(diff)) {
			return [hash.get(diff), i]
		}

		hash.set(nums[i], i)
	}

	return []
}

const nums: number[] = [2, 5, 8, 3, 6, 3, 5]
const target: number = 10

const sum: number[] = twoSum(nums, target)

console.log(sum)
