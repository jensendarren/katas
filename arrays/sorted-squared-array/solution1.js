// Brute force approach where we square all the elements one by one
// and then sort the array and return that

// O(nlogn) time (due to the sort) | O(n) space - where n is the length of the array

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0)

    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx];
        sortedSquares[idx] = value * value;
    }

    sortedSquares.sort((a, b) => a - b)

    return sortedSquares;
}

module.exports = sortedSquaredArray