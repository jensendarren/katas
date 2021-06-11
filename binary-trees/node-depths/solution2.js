// This is a recursive approach
// O(n) time | O(h) space - where n is the number of the nodes in the
// Binary Tree and h is the height of the Binary Tree

function nodeDepths(root, depth=0) {
    if(root === null) return 0;
    // use recursion to sum up the depthts
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

module.exports = nodeDepths