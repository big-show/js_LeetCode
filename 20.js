/*
 * @Author: liub
 * @Date: 2020-01-15 18:58:03
 * @LastEditors: liub
 * @LastEditTime: 2020-01-15 19:49:01
 */
/**
 * @param {string} s
 * @return {boolean}
 */
let mappers = {
  "(": ")",
  "[": "]",
  "{": "}"
}
var isValid = function(s) {
  let stack = []
  let length = s.length
  if (length % 2 === 1) return false
  for (let i = 0; i < s.length; i++) {
    if (["{", "[", "("].includes(s[i])) stack.push(s[i])
    else {
      let peak = stack.pop()
      if (!isMatching(peak, s[i])) return false
    }
  }
  return !stack.length
}
let isMatching = (index, value) => {
  return mappers[index] === value
}
console.log(isValid("()[]{}"))
