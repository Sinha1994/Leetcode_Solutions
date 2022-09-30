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
var middleNode = function(head) {
    let len = 0;
    if(head.next == null) return head;
    let temp = head;
    while(temp != null) {
        temp = temp.next;
        ++len;
    }
    let middle = parseInt(len/2)+1;
    while(middle > 1) {
        head = head.next;
        --middle;
    }
    return head;
};