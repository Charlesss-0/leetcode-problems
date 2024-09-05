export {}

function maxProfit(prices: number[]): number {
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

/*
STEPS:

1. Initialize minPrice to infinity, and maxProfit to zero

2. Iterate through the input array starting from zero to the length of the array

3. Check if current price is less than minPrice,
	update minPrice to the current price

4. Calculate current profit with the current price minus minPrice

5. Check if current profit is greater than maxProfit,
	update maxProfit with the current profit

6. Return the maximum profit
*/
