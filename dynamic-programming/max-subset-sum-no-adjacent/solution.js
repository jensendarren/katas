// O(n) time | O(n) space
function maxSubsetSumNoAdjacent(array) {
  if(array.length === 0) { return 0 }
	let maxSums = []
	maxSums.push(array[0])
	array[1] > array[0] ? maxSums.push(array[1]) : maxSums.push(array[0])
	for(let i=2; i<array.length; i++) {
		let prevMax = maxSums[i-1]
		let potentialMax = array[i] + maxSums[i-2]
		prevMax > potentialMax ? maxSums.push(prevMax) : maxSums.push(potentialMax)
	}
	return maxSums[maxSums.length -1]
}

module.exports = maxSubsetSumNoAdjacent