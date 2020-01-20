/*
 * @Author: liub
 * @Date: 2020-01-20 14:17:48
 * @LastEditors: liub
 * @LastEditTime: 2020-01-20 14:26:53
 */
// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let arrayS = new Array()
  let arrayT = new Array()
  for (let i = 0; i < S.length; i++) {
    if (S[i] != "#") {
      arrayS.push(S[i])
    } else {
      arrayS.length ? arrayS.pop() : null
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] != "#") {
      arrayT.push(T[i])
    } else {
      arrayT.length ? arrayT.pop() : null
    }
  }
  return arrayS.toString() === arrayT.toString()
}
