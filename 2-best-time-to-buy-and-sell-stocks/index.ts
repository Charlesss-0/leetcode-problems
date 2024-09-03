// Brute-Force solution
// function maxProfit(prices: number[]): number {
// 	let maxProfit: number = 0

// 	for (let i = 0; i < prices.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			const profit = prices[i] - prices[j]

// 			if (profit > maxProfit) {
// 				maxProfit = profit
// 			}
// 		}
// 	}

// 	return maxProfit
// }

// One Pass solution
export function maxProfit(prices: number[]): number {
	let minPrice: number = Infinity
	let maxProfit: number = 0

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i]
		} else {
			const profit = prices[i] - minPrice

			if (profit > maxProfit) {
				maxProfit = profit
			}
		}
	}

	return maxProfit
}

const prices = [7, 3, 5, 4, 6, 1]
const finalProfit = maxProfit(prices)

console.log(finalProfit)
