// O(n) time | O(1) space where n is the length of the input array
// Time: is because we traverse the array only once and dont need to sort
// Space: is because we only need to store two constant varibles (maxEndingHere and maxSoFar)

function kadanesAlgorithm(array) {
	let maxEndingHere = array[0]
	let maxSoFar = array[0]
	for(let i=1; i<array.length; i++) {
		const num = array[i]
		maxEndingHere = Math.max(num, maxEndingHere + num)
		maxSoFar = Math.max(maxSoFar, maxEndingHere)
	}

	return maxSoFar
}

// Explaination:
// 1. Keep  track of the sum of all the values to the index before the current
// 2. Compare the new sum when adding the value at the current index.
// 3. Keep the greater of either adding the new value or just the value itself
// 4. Update the maxSoFar with the new maximum value so we can return it at the end of the loop

module.exports = kadanesAlgorithm