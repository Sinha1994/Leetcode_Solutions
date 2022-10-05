/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let curr1 = list1, curr2 = list2, merged=null;
    if(list1 == null) return list2;
    if(list2 == null) return list1;
    let head=null,tail=null;
    if(curr1.val < curr2.val){
        head = curr1;
        tail = curr1;
        curr1 = curr1.next;
    } else {
        head = curr2;
        tail = curr2;
        curr2 = curr2.next;   
    }
    while(curr1 != null && curr2 != null){
        if(curr2.val < curr1.val) {
            tail.next = curr2;
            tail = tail.next;
            curr2 = curr2.next;   
        }
        else {
            tail.next = curr1;
            tail = tail.next;
            curr1 = curr1.next;   
        }
    }
    while(curr1 != null) {
      tail.next = curr1;
            tail = tail.next;
            curr1 = curr1.next;     
    }
    while(curr2 != null){
                 tail.next = curr2;
            tail = tail.next;
            curr2 = curr2.next;      
    }
    return head;
};