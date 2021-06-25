// Average: O(^2) time | O(n^2) space
// Worst: O(^3) time | O(n^2) space

// The approach here is to add to a hash table the pair combinations that add up
// to a particular number and then check the difference with each other pairs of numbers in the array
// to see if it would sum to our target sum

function fourNumberSum(array, targetSum) {
    const allPairSums = {};
    const quadruplets = [];

    // i: note skip the first and last value in the array because there is nothing to do
    for(let i = 1; i < array.length - 1; i++) {
        // j:iterate after all the numbers after our current number
        for(let j = i + 1; j < array.length;  j++) {
            const currentSum = array[i] + array[j];
            const difference = targetSum - currentSum;
            if (difference in allPairSums) {
                for (const pair of allPairSums[difference]) {
                    quadruplets.push(pair.concat( [array[i], array[j]] ))
                }
            }
        }
        // k: second inner for loop which loops adds or
        // appends the pair to allPairSums for currentSum
        // note that we only add to the allPairsSum here in this second
        // loop going back (since k<i) from the current value to avoid double counting the pairs
        for (let k = 0; k < i; k++) {
            const currentSum = array[i] + array[k];
            if (!(currentSum in allPairSums)) {
                allPairSums[currentSum] = [[array[k], array[i]]];
            } else {
                allPairSums[currentSum].push([array[k], array[i]])
            }
        }
    }
    return quadruplets;
}

module.exports = fourNumberSum