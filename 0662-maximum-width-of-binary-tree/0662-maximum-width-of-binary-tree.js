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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(root == null) return 0;
    let queue=[], res=1, start=0, end=0;
    queue.push([root,0]);
    while(queue.length > 0) {
        let count = queue.length;
        start = queue[0][1];
        end = queue[queue.length-1][1];
        res = Math.max(res, (end-start)+1);
        for(let i=0;i<count;i++){
            let curr = queue.shift();
            let node = curr[0];
            let idx = curr[1] - start;
        if(node.left != null) {
        queue.push([node.left, 2*idx+1]); 
        }
        if(node.right != null) {
        queue.push([node.right, 2*idx+2]); 
       }
        }
    }
    return res;
};