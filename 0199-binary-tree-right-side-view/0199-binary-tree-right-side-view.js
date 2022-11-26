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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root == null) return [];
    let rightView = [];
    let queue = [root];
    while(!!queue.length) {
        let size = queue.length;
        for(let i=0;i<size;i++){
          let node = queue.shift(); 
          if(node.left != null)
          queue.push(node.left);
          if(node.right != null)
          queue.push(node.right);
          if(i == size-1)
          rightView.push(node.val);
        }
    }
    return rightView;
};