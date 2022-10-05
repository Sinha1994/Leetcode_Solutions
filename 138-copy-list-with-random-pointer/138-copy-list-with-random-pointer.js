/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head == null) return null;
    let curr = head;
    while(curr != null){
        let newNode = new Node(curr.val);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = curr.next ? curr.next.next : curr.next;
    }
    curr = head;
    let copy = null; 
    while(curr && curr.next != null){
      copy = curr.next; 
      copy.random = curr.random ? curr.random.next : curr.random;
      curr = curr.next.next;
    }
    curr = head;
    copy = curr.next; 
    let copied = copy;
    while(curr && curr.next != null){
      let next = copy.next;
      copy.next = copy.next ? copy.next.next : copy.next;
      curr.next = next;
      curr = curr.next;
      copy = copy.next;
    }
    return copied;
};