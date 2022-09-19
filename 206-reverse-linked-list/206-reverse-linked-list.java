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
    public ListNode reverse(ListNode head, ListNode rev){
        if(head != null){
          ListNode prev = head.next;
          head.next =  rev;
          rev = head;
          head = prev;
          return reverse(head, rev);
        } else {
          return rev;  
        }
    }
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        ListNode rev = null;
        // ListNode prev = null;
        // while(head != null){
        //   prev = head.next;
        //   head.next =  rev;
        //   rev = head;
        //   head = prev;
        // }
        // return rev;  
        return reverse(head, rev);
    }
}