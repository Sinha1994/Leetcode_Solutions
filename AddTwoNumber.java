/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int cf = 0;
        ListNode resList = new ListNode();
        ListNode current = resList;
        while(l1 != null || l2 != null || cf != 0) {
            int num = 0;
            if(l1 != null)
            num = num + l1.val;
            if(l2 != null)
            num = num + l2.val;
            if(cf != 0)
            num = num + cf;
            cf = num/10;
            num = num%10;
            current.next = new ListNode(num);    
            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
            current = current.next;
        }
        return resList.next;
    }
}