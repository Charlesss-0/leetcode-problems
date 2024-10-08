# Two Sum 2

Given a 1-indexed array of integers `nums` that is already sorted in non-decreasing order, find two numbers such that they add up to a `specific` target number. Let these two numbers be `nums[index1]` and `nums[index2]` where `1 <= index1 < index2 <= nums.length`

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length `2`.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

## Example 1

**Input:** `nums = [2,7,11,15], target = 9`

**Output:** `[1,2]`

**Explanation**: The sum of `2` and `7` is `9`. Therefore, `index1 = 1, index2 = 2`. We return `[1, 2]`.

## Example 2

**Input:** `nums = [2,3,4], target = 6`

**Output:** `[1,3]`

**Explanation:** The sum of `2` and `4` is `6`. Therefore `index1 = 1, index2 = 3`. We return `[1, 3]`.

## Example 3

**Input:** `nums = [-1,0], target = -1`

**Output:** `[1,2]`

**Explanation:** The sum of `-1` and 0 is `-1`. Therefore `index1 = 1, index2 = 2`. We return `[1, 2]`.

## Constraints

`2 <= nums.length <= 3 \* 104`

`-1000 <= nums[i] <= 1000`

nums is sorted in non-decreasing order.

`-1000 <= target <= 1000`
