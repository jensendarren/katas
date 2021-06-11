// This solution takes an iterative apprach using a stack
// O(n) time | O(h) space - where n is the number of the nodes in the
// Binary Tree and h is the height of the Binary Tree
function nodeDepths(root) {
    // keep a running track of the sum
    let sumOfDepths = 0;
    // initialize the stack with the root node
    const stack = [{node: root, depth: 0}]

    // while there is a node to pop off the stack
    while(stack.length > 0) {
        const {node, depth} = stack.pop();
        // if the node is null then it means that a leaf node added it
        // (i.e. in the stack push call below node.left and/or node.right was null)
        if (node === null) continue;
        // keep an accumulative sum of the depths
        sumOfDepths += depth;
        // push the left and right node of the current to the stack and set their depths
        // to the current depth + 1
        stack.push({node: node.left, depth: depth + 1})
        stack.push({node: node.right, depth: depth + 1})
    }

    return sumOfDepths;
}

