/*
 * @Author: liub
 * @Date: 2020-01-19 18:55:24
 * @LastEditors: liub
 * @LastEditTime: 2020-01-19 19:57:15
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//先统计链表长度，再删除n-2 O(n)两次遍历
// var removeNthFromEnd = function(head, n) {
//   let guardP = new ListNode(0)
//   guardP.next = head
//   if (head === null) return null
//   let length = 0
//   let p = guardP
//   while (head) {
//     head = head.next
//     length++
//   }
//   let index = 0
//   while (index < length - n - 1) {
//     p = p.next
//     index++
//   }
//   p.next = p.next.next
//   return guardP.next
// }
//双指针操作法 一次遍历
var removeNthFromEnd = function(head, n) {
  let guardP = new ListNode(0)
  guardP.next = head
  if (head === null) return null
  let fastP = guardP,
    slowP = guardP
  for (let i = 0; i <= n; i++) {
    fastP = fastP.next
  }
  while (fastP) {
    slowP = slowP.next
    fastP = fastP.next
  }
  slowP.next = slowP.next.next
  return guardP.next
}
