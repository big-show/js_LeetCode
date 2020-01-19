/*
 * @Author: liub
 * @Date: 2020-01-16 16:09:46
 * @LastEditors: liub
 * @LastEditTime: 2020-01-16 16:49:17
 */
var merge = function(nums1, m, nums2, n) {
  let current = m + n - 1
  let mIndex = m - 1
  let nIndex = n - 1
  while (mIndex >= 0 && nIndex >= 0) {
    if (nums1[mIndex] >= nums2[nIndex]) {
      nums1[current--] = nums1[mIndex--]
    } else {
      nums1[current--] = nums2[nIndex--]
    }
  }
  while (mIndex >= 0) nums1[current--] = nums1[mIndex--]
  while (nIndex >= 0) nums1[current--] = nums2[nIndex--]
  return nums1
}
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))
