export {}

function climbStairs(n: number): number {
	let one: number = 1
	let two: number = 1

	for (let i = 0; i < n - 1; i++) {
		let currentSteps: number = one
		one += two
		two = currentSteps
	}

	return one
}

const n = 5
const result = climbStairs(n)

console.log(result)

/*
STEPS:

1. Initialize one, and two to 1

2. Iterate through the input number from 0 to n - 1:
    a. Store the current value of one in a variable called currentSteps
    b. Add one and two to the previous value of one
    c. Update two to the current value of one

3. Return the final value of one
*/

// Time Complexity: O(n)
// Space Complexity: O(1)
