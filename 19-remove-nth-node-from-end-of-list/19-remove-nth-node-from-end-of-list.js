/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) return head;
    let temp = head;
    let count = 1;
    let fast = temp, slow = temp;
    while(count<n && fast != null){
        fast = fast.next;
        ++count;
    }
    if(fast.next == null){
        if(slow.next == null)
        return null;
        return head.next;
    }
    while(fast.next != null) {
        fast = fast.next;
        if(fast.next == null) {
          slow.next = slow.next.next;
          break;
        }
        slow = slow.next;
    }
    return head;
};