/*
 * @Author: liub
 * @Date: 2020-01-19 17:00:40
 * @LastEditors: liub
 * @LastEditTime: 2020-01-19 17:36:35
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false
  let slowP = head,
    fastP = head.next
  while (fastP && fastP.next) {
    if (slowP === fastP || slowP === fastP.next) return true
    slowP = slowP.next
    fastP = fastP.next.next
  }
  return false
}
