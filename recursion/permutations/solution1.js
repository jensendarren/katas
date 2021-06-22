// Upper bound: O(n*2n!) time | O(n*n!) space
// Roughly: O(n*n!) time | O(n*n!)) space
function getPermutations(array) {
    const permutations = [];
    permutationsHelper(array, [], permutations);
    return permutations;
}

function permutationsHelper(array, currentPermutation, perumutations) {
    // when the array is empty and there is a new permutation then add that
    // permutation to our list of permutations
    if(!array.length && currentPermutation.length) {
        perumutations.push(currentPermutation);
    } else {
        // loop all the elements of the array and create a new array with the
        // element removed and add that to our current permutation array
        // then recursivly call the permutations helper function with the new array
        // that contains the remaining numbers, the new permutation and the list of permutations
        for(let i=0; i < array.length; i++) {
            const newArray = array.slice(0, i).concat(array.slice(i+1));
            const newPermutation = currentPermutation.concat([array[i]]);
            permutationsHelper(newArray, newPermutation, perumutations)
        }
    }
}

module.exports = getPermutations