/*
 * @Author: liub
 * @Date: 2020-01-19 19:40:33
 * @LastEditors: liub
 * @LastEditTime: 2020-01-19 19:59:27
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。O(n)
var middleNode = function(head) {
  let fastP = head,
    slowP = head
  while (fastP && fastP.next) {
    fastP = fastP.next.next
    slowP = slowP.next
  }
  return slowP
}
