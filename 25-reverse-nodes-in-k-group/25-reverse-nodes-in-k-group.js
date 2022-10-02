/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head == null || head.next == null) return head;
    let curr = head, prev=null, count=0;
    while(count<k){
        if(curr == null) return head;
        curr = curr.next;
        ++count;
    }
    count=0, curr=head;
    while(curr != null && count<k) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        ++count;
    }
    if(curr != null){
      head.next = reverseKGroup(curr, k);   
    }
    return prev;
};