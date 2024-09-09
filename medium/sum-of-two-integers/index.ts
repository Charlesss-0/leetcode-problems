function getSum(a: number, b: number): number {
	while (b !== 0) {
		const temp: number = (a & b) << 1

		a = a ^ b
		b = temp
	}

	return a
}

const a = 11
const b = 9
const result = getSum(a, b)

console.log(result)

/*
STEPS:

1. While b is not equal to 0:
	a. Intialize temp value to (a & b) << 1
	b. Update a to a ^ b
	c. Update b to temp

2. Return a
*/
