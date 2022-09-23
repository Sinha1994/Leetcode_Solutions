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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSameTree = function(root, subRoot) {
    if(root === null && subRoot === null){
        return true;
    }
    if(root !== null && subRoot !== null && root.val === subRoot.val){
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
    } 
    return false;
}
var isSubtree = function(root, subRoot) {
    if(subRoot === null){
        return true;
    }
    if(root == null){
        return false;
    }
    if(isSameTree(root, subRoot)){
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};