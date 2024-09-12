export {}

function reverseBits(n: number): number {
	let result: number = 0

	for (let i = 0; i < 32; i++) {
		const bit: number = (n >> i) & 1
		result = result | (bit << (31 - i))
	}

	return result >>> 0
}

const n = 8
const result = reverseBits(n)

console.log(result)

/*
STEPS:

1. Initialize result to 0

2. Iterate over the number of bits in n:
    a. Get the bit at the current index
    b. Shift the result to the left by the number of bits in n - i

3. Return the result
*/

// Time Complexity: O(1)
// Space Complexity: O(1)
