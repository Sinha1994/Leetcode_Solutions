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
var getHeight = function(root, diff) {
    if(root === null || (root.left === null && root.right === null)){
        return 0;
     }
    let h = 1;
    let lh = root.left != null ? h + getHeight(root.left, diff) : 0;
    let rh = root.right != null ? h + getHeight(root.right, diff) : 0;
    diff[0] = Math.max(diff[0], Math.abs(lh-rh));
    return Math.max(lh, rh);
}
var isBalanced = function(root) {
    let diff = [0];
    let height = getHeight(root, diff);
    if(diff[0] > 1) return false;
    return true;
};