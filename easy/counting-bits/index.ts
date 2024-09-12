export {}

function countBits(n: number): number[] {
	const sum: number[] = [...Array(n + 1).fill(0)]
	let offset: number = 1

	for (let i = 1; i <= n; i++) {
		if (offset * 2 === i) {
			offset = i
		}

		sum[i] = 1 + sum[i - offset]
	}

	return sum
}

const number = 2
const result = countBits(number)

console.log(result)

/*
STEPS:

1. Initialize sum to the length of the input number

2. Initialize offset to 1

3. Iterate from 1 to the range of the input number:
	a. If offset times 2 is equal to the input number, update offset to the current index
	b. Update sum at the current index with 1 added to the sum at the previous index

4. Return sum
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
