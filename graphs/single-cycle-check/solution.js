// O(n) time | O(1) space - where n is the length of the input array

function hasSingleCycle(array) {
    let numElementsVisitied = 0;
    // in this example we set currentIdx (our starting position) to 0
    // this could be set to another number if you wanted to check
    // the cycle from a different starting point
    let currentIdx = 0;

    // loop all the elements of the input array
    while (numElementsVisitied < array.length) {
        // if we have cycled all the elements AND we are NOT at our starting point
        // then this is NOT a single cycle
        if(numElementsVisitied > 0 && currentIdx === 0) return false;
        // otherwise increment the number of elements that we have visited
        numElementsVisitied++;
        // and get the next index of the element to check
        currentIdx = getNextIdx(currentIdx, array);
    }

    return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
    // set the jump amount to be the value at the current index
    const jump = array[currentIdx];
    // niavely, the next index simply be the current index + the jump
    // but if the jump is a large number, say greater than the length of the array
    // we can take the modulus of that number to get the next idx that is
    // within the bounds of the input array
    // e.g. in the array below the length is 5 and the first jump is 6 which is larger than
    // the bounds of the array so we take (0 + 6) % 5 = 1 (so we just move to index 1)
    // [6,1,2,3,4]
    const nextIdx = (currentIdx + jump) % array.length;
    // in the return statement below, when the next index is -ve then we need to add the length of the array
    // to that number to get the index back into the bounds of the array
    // e.g. in the array below the first jump is -1 which results in a next index of -1
    // since we need to wrap the array bounds for the jump then when the value is -ve like this
    // we can simply add the length of the array to it to get it back into the array bounds -1 + 5 = Index 4
    // [-1,1,2,3,4]
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

module.exports = hasSingleCycle