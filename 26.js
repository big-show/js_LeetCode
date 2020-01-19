/*
 * @Author: liub
 * @Date: 2020-01-15 19:52:29
 * @LastEditors: liub
 * @LastEditTime: 2020-01-16 13:51:20
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = nums.length
  let slowP = 0
  for (let fastP = 0; fastP < length; fastP++) {
    if (nums[slowP] !== nums[fastP]) {
      nums[++slowP] = nums[fastP]
    }
  }
  return slowP + 1
}
console.log(removeDuplicates([1, 1, 2]))
