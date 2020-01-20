/*
 * @Author: liub
 * @Date: 2020-01-19 15:27:01
 * @LastEditors: liub
 * @LastEditTime: 2020-01-19 15:58:33
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
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
function ListNode(val) {
  this.val = val
  this.next = null
}
var reverseList = function(head) {
  if (head === null || head.next === null) return head
  let prev = head
  let p = head.next
  let later = p.next
  head.next = null

  while (p.next != null) {
    p.next = prev
    prev = p
    p = later
    later = later.next
  }
  p.next = prev
  return p
}
let l1 = new ListNode(1)
let l2 = new ListNode(2)
let l3 = new ListNode(3)
let l4 = new ListNode(4)
let l5 = new ListNode(5)
l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5
l5.next = null
console.log(reverseList(l1))
