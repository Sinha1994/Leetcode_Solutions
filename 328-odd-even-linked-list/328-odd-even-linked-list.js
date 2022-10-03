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
var oddEvenList = function(head) {
    if(head == null || head.next == null) return head;
    let startEven = null, lastEven = null, startOdd = null, lastOdd = null, curr=head;
    let i=1;
    while(curr != null){
        if(i % 2 != 0) {
            if(lastOdd == null){
                lastOdd = curr;
                startOdd = curr;
                curr = curr.next;
            } else {
                let curr_next = curr.next;
                lastOdd.next = curr;
                lastOdd = lastOdd.next;
                curr = curr_next;
            }
        } else {
              if(lastEven == null){
                lastEven = curr;
                startEven = curr;
                curr = curr.next;
            } else {
                let curr_next = curr.next;
                lastEven.next = curr;
                lastEven = lastEven.next;
                curr = curr_next;
            }
        }
        ++i;
    }
    if(!startEven) {
        lastOdd.next = null;
        return startOdd;
    }
    if(!startOdd) {
        lastEven.next = null;
        return startEven; 
    }
    lastEven.next = null;
    lastOdd.next = startEven;
    return startOdd;
};