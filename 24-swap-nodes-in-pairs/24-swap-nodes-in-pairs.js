/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    let curr = head.next.next;
    let prev = head;
    head = head.next;
    head.next = prev;
    while(curr != null && curr.next != null) {
      prev.next = curr.next;
      prev = curr;
      let next = curr.next.next;
      curr.next.next = curr;
      curr = next;
    }
    prev.next = curr;
    return head;
};