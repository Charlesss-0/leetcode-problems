export {}

function hammingWeight(n: number): number {
	let weight: number = 0

	while (n) {
		n = n & (n - 1)
		weight++
	}

	return weight
}

const num = 2147483645
const result = hammingWeight(num)

console.log(result)

/*
STEPS:

1. Iniitialize weight to 0

2. While n is not equal to 0:
    a. n = n & (n - 1)
    b. Increment weight by 1

3. Return weight
*/
