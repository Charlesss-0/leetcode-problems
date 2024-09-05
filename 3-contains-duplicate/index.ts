export {}

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

/*
STEPS:

1. Initialize an empty hash set

2. Iterate through the input array starting from zero to the length of the array

3. Check if the current number exists in the hash set,
	return true

4. Add the current number to the hash set

5. Return false if no duplicate is found
*/
