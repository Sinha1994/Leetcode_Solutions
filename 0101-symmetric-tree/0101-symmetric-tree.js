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
var helper = function(rootLeft, rootRight) {
    if(rootLeft == null && rootRight == null) return true;
    if(rootLeft == null || rootRight == null) return false;
    if(rootLeft.val != rootRight.val) return false;
    return helper(rootLeft.left, rootRight.right) && helper(rootLeft.right, rootRight.left);
}
var isSymmetric = function(root) {
    return helper(root.left, root.right);
};