export {}

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

/*
STEPS:

1. Initialize empty hash map

2. Iterate through the input array starting from zero to the length of the array

3. Calculate the difference between target minus current number

4. Check if the difference is already in the hash map

5. return the stored index from the hash map and the current index

6. Store the current number with its index in the hash map

7. Return empty array if no index match the target
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
