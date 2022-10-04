/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
            let c1 = 0, c2=0;
        let curr1=headA, curr2=headB;
        while(curr1!=null){
            ++c1;
            curr1 = curr1.next;
        }
        while(curr2!=null){
            ++c2;
            curr2 = curr2.next;
        }
        let diff = Math.abs(c1-c2);
        curr1=headA, curr2=headB;
        if(c1>c2){
            while(diff > 0){
                curr1 = curr1.next;
                diff--;
            }
        } else {
               while(diff > 0){
                curr2 = curr2.next;
                diff--;
            }
        }
        while(curr1 != null && curr2 != null) {
            if(curr1 == curr2){
                return curr1;
            }
          curr1 = curr1.next;
          curr2 = curr2.next;
        }
        return null;
};