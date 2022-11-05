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
let leftHeight = (root) => {
    if(root == null) return 0;
    //console.log("left", root.val);
    return 1+leftHeight(root.left);
}
let rightHeight = (root) => {
    if(root == null) return 0;
    return 1+rightHeight(root.right);
}
var countNodes = function(root) {
    if(root == null) return 0;
    let left = leftHeight(root);
    let right = rightHeight(root);
    console.log(root.val, left, right);
    if(left == right) {
        return Math.pow(2, left)-1;;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};