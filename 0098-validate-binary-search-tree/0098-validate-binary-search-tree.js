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
 * @return {boolean}
 */
var checkBST = function(root,min, max) {
    if(root == null) return true;
    if(root.val >= max || root.val <= min) return false;
    return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);
}
var isValidBST = function(root) {
   return checkBST(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
};