export {}

function countBits(n: number): number[] {
	let res: number[] = []

	for (let i = 0; i <= n; i++) {
		let binary = i.toString(2)

		let ones = 0
		for (let j = 0; j < binary.length; j++) {
			if (binary[j] === '1') {
				ones++
			}
		}

		res.push(ones)
	}

	return res
}

const number = 2
const result = countBits(number)

console.log(result)

/*
STEPS:

1. Initialize res to an empty array

2. Iterate over the range of 0 to n
	a. Convert the current index to a binary string
	b. Initialize ones to 0
	c. Iterate over the binary string from 0 to the length of the string
	d. If the current character is 1, increment ones
	e. Push ones to rest

3. Return res
*/

// Time Complexity: O(n * log(n))
// Space Complexity: O(n)
