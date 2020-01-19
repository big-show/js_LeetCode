/*
 * @Author: liub
 * @Date: 2020-01-16 13:59:48
 * @LastEditors: liub
 * @LastEditTime: 2020-01-16 15:40:56
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//暴力解法 时间复杂度(n^2)

// var maxSubArray = function(nums) {
//   let length = nums.length
//   if (length === 1) {
//     return nums[0]
//   }
//   let maxSum = nums[0]
//   for (let i = 0; i < length; i++) {
//     let temp = nums[i]
//     if (temp > maxSum) {
//       maxSum = temp
//     }
//     for (let j = i + 1; j < length; j++) {
//       temp += nums[j]
//       if (temp > maxSum) {
//         maxSum = temp
//       }
//     }
//   }
//   return maxSum
// }
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//动态规划 O(n)

var maxSubArray = function(nums) {
  let currentMax = nums[0]
  let maxSum = currentMax
  let length = nums.length
  if (length === 1) {
    return nums[0]
  }
  for (let i = 1; i < length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i])
    maxSum = Math.max(currentMax, maxSum)
  }
  return maxSum
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
