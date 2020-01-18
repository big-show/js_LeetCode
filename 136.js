/*
 * @Author: ant
 * @Date: 2020-01-18 22:21:57
 * @LastEditors  : ant
 * @LastEditTime : 2020-01-18 22:52:13
 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//使用额外空间map来实现 O(n)
// var singleNumber = function(nums) {
//     let res;
//     let map = new Map()
//     for(var val of nums)
//     {
//         if(map.has(val)){
//             map.set(val,2)
//         }
//         else
//         {
//             map.set(val,1)
//         }
//     }
//     map.forEach((value,index)=>{
//         if(value===1)
//         res=index;
//     })
//     return res;
// };
// console.log(singleNumber([4,1,2,1,2]))
//不使用额外空间 O(n)
var singleNumber = function(nums) {
    let res = 0
    let length = nums.length;
    for(let i=0;i<length;i++)
    {
        res = nums[i]^res;
    }
    return res;
};