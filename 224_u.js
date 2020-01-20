/*
 * @Author: liub
 * @Date: 2020-01-20 14:28:44
 * @LastEditors: liub
 * @LastEditTime: 2020-01-20 17:11:00
 */
// 实现一个基本的计算器来计算一个简单的字符串表达式的值。

// 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
/**
 * @param {string} s
 * @return {number}
 */
let operation = ["+", "-"]
var calculate = function(s) {
  let newStr = s.replace(/[\s]/g, "")

  return newStr
}
console.log(calculate("(1+(4 +5 +2)-3 )+( 6+8 )"))
