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
var detectCycle = function(head) {
    if(head == null || head.next == null) return null;
    let slow=head, fast = head;
    while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;
      if(fast == slow){
          slow = head;
          break;
      }
    }
    if(fast == null || fast.next == null) return null;
    while(slow.next != null && fast != null) {
        slow = slow.next;
        fast = fast.next;
        if(slow == fast){
            if(slow.next.next == slow){
                return slow.next;
            }
          return slow;
        }
    }
    return null;
}