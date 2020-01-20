/*
 * @Author: ant
 * @Date: 2020-01-18 22:52:50
 * @LastEditors  : ant
 * @LastEditTime : 2020-01-18 23:02:02
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.array = new Array()
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  console.log(this)
  this.array.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.array.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.array[this.array.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this[0]
  for (let i = 0; i < this.array.length; i++) {
    if (min > this.array[i]) {
      min = this.array[i]
    }
  }
  return min
}

var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
