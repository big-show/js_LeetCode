/*
 * @Author: ant
 * @Date: 2020-01-18 23:04:43
 * @LastEditors  : ant
 * @LastEditTime : 2020-01-18 23:22:11
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//两次for循环 O(n^2) O(1)
// var twoSum = function(numbers, target) {
//     let resArr=[]
//     for(let i =0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[i]+numbers[j]===target)
//             {
//                 resArr.push(i+1,j+1);
//                 return resArr;
//             }
//         }
//     }
// };
//双指针循环 O(n) O(1)
var twoSum = function(numbers, target) {
    let resArr=[]
    let leftP = 0,rightP=numbers.length-1
    while(leftP<rightP)
    {
        if(numbers[leftP]+numbers[rightP]===target)
        {
            resArr.push(leftP+1,rightP+1);
            return resArr;
        }
        while(numbers[leftP]+numbers[rightP]<target)
        leftP++;
        while(numbers[leftP]+numbers[rightP]>target)
        rightP--;
    }  
};
console.log(twoSum([2, 7, 11, 15],9))
