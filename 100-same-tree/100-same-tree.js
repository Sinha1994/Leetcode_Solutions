/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isChildTreeSame = function(p,q) {
    if(p === null && q === null){
        return true;
    }
    if((p === null && q != null) 
       || (p != null && q === null)
       || (p.val != q.val)){
        return false;
    }
    return isChildTreeSame(p.left, q.left) && isChildTreeSame(p.right, q.right); 
}
var isSameTree = function(p, q) {
    return isChildTreeSame(p, q);
};