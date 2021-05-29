function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
function findClosestValueInBstHelper(tree, target, closest) {
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value
	}
	if (target < tree.value) {
		return findClosestValueInBstHelper(tree.left, target, closest)
	}
	if (target > tree.value) {
		return findClosestValueInBstHelper(tree.right, target, closest)
	}
	return closest
}

exports.module = findClosestValueInBst