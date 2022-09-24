/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root != null && (root.left && root.left.val === p.val)
       && (root.right && root.right.val === q.val)){
        return root;
    }
    if(root != null && (root.left && root.left.val === q.val) 
       && (root.right && root.right.val === p.val)){
        return root;
    }
    if(root != null && (root.val === p.val ||  root.val === q.val)) {
         return root;
    }
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q);
    } else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};