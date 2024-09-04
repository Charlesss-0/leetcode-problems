export {}
// Brute-Force Approach
// function containsDuplicate(nums: number[]): boolean {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			if (nums[i] === nums[j]) {
// 				return true
// 			}
// 		}
// 	}

// 	return false
// }

// Set solution
function containsDuplicate(nums: number[]): boolean {
	const hashSet = new Set()

	for (let i = 0; i < nums.length; i++) {
		if (hashSet.has(nums[i])) {
			return true
		}

		hashSet.add(nums[i])
	}

	return false
}

const nums: number[] = [1, 3, 4, 5, 6, 6, 3]
const result: boolean = containsDuplicate(nums)

console.log(result)
