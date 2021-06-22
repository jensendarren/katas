// O(n*n!) time | O(n*n!) space
function getPermutations(array) {
    const permutations = [];
    permutationsHelper(0, array, permutations);
    return permutations;
}

function permutationsHelper(i, array, permutations) {
    // when pointer, i, is at the end of the array then we
    // can add this as a new permuation to the permutations array
    if (i === array.length -1) {
        permutations.push(array.slice())
    } else {
        // create a pointer to move accross the array
        for(let j = i; j < array.length; j++) {
            // swap the positions of pointer i and j
            swap(i,j,array);
            // recursivly call the helper with the increamented pointer i
            permutationsHelper(i+1, array, permutations);
            // swap the values back again ready for the next iteration
            swap(i,j,array);
        }
    }
}

function swap(i,j,array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

module.exports = getPermutations