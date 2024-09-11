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
