/*
 * @Author: ant
 * @Date: 2020-01-18 21:32:22
 * @LastEditors: ant
 * @LastEditTime: 2020-01-18 22:14:31
 */
/**
 * @param {string} s
 * @return {boolean}
 */
//先处理字符再判断法 O(n) O(1)
var isPalindrome = function(s) {
   let newStr = s.replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
   let length = newStr.length 
   for(let i =0;i<length/2;i++)
   {
        if(newStr[i]!==newStr[length-i-1])
            return false;
   }
   return true;
};