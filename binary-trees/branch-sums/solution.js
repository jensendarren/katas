// o(n) time | O(n) space
function branchSums(root) {
	return sumRecursion(root, sum=0, arr=[])
}

function sumRecursion(node, sum, arr) {
	sum += node.value;
	if(node.left === null && node.right === null) {
		arr.push(sum);
	}
	if(node.left != null) {
		sumRecursion(node.left, sum, arr)
	}
	if(node.right != null) {
		sumRecursion(node.right, sum, arr)
	}
	return arr;
}
