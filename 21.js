/*
 * @Author: liub
 * @Date: 2020-01-19 17:38:24
 * @LastEditors: liub
 * @LastEditTime: 2020-01-19 18:53:45
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let resList = new ListNode()
  let resHead = resList
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      resList.next = l1
      l1 = l1.next
    } else {
      resList.next = l2
      l2 = l2.next
    }
    resList = resList.next
  }
  resList.next = l1 ? l1 : l2
  return resHead.next
}
