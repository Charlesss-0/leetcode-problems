export {}

function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b)
	const res: number[][] = []

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue

		let left: number = i + 1
		let right: number = nums.length - 1

		while (left < right) {
			const sum: number = nums[i] + nums[left] + nums[right]

			if (sum > 0) {
				right--
			} else if (sum < 0) {
				left++
			} else {
				res.push([nums[i], nums[left], nums[right]])

				while (left < right && nums[left] === nums[left + 1]) left++
				while (left < right && nums[right] === nums[right - 1]) right--

				left++
				right--
			}
		}
	}

	return res
}

const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums)

console.log(result)
