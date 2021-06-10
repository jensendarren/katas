// Better approach to use pointers and travers from either ends and based
// on the greater of the two absolute values add this to the end of the new
// sorted squares array

// O(n) time (due to using pointers that result in the output array already being sorted correctly)
// O(n) space - where n is the length of the array

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0)
    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;

    for (let idx = array.length-1; idx >=0; idx--) {
        const smallerValue = array[smallerValueIdx]
        const largerValue = array[largerValueIdx]

        if(Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[idx] = smallerValue * smallerValue;
            smallerValueIdx++;
        } else {
            sortedSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }

    return sortedSquares;
}

module.exports = sortedSquaredArray