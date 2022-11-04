/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let current = [];
    if(root == null) return current;
    let stack1 = [root];
    let stack2 = [];
   while(stack1.length > 0 || stack2.length > 0){ 
        let arr = [];
        while(stack1.length> 0) {
            let node = stack1.pop();  
            arr.push(node.val);
            if(node.left)
            stack2.push(node.left);
            if(node.right)
            stack2.push(node.right); 
        }
        if(arr.length > 0)
        current.push(arr);
        arr = [];
        while(stack2.length> 0) {
            let node = stack2.pop();  
            arr.push(node.val);
            if(node.right)
            stack1.push(node.right); 
            if(node.left)
            stack1.push(node.left);
        }
        if(arr.length > 0)
        current.push(arr);
    }
    return current;
};