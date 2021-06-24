// O(n^3 +m) time | O(n + m) space - where n is the number of digits in Pi
// and m is the number of favorite numbers

function numbersInPi(pi, numbers) {
    // crearte a store of numbers to act a record
    const numbersTable = {};
    for (const number of numbers) {
        numbersTable[number] = true;
    }
    const minSpaces = getMinSpaces(pi, numbersTable, {}, 0);
    // if the minSpaces is still in Infinity then there is no way to get the min spaces
    return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, numbersTable, cache, idx) {
    // if we are at the of the pi number then we are out of bounds
    // returns -1 so that we can consider that as the base case and eaily add one space later
    if (idx === pi.length) return -1;
    // if the idx is already in the cache then we have already calculated it so just return it
    if (idx in cache) return cache[idx];
    // set minSpaces to Infinity so its easy to compare with min later
    let minSpaces = Infinity;
    // iterate through all the indicies of pi
    for (let i = idx; i < pi.length; i++) {
        // grab that indexes prefix value by slicing it off the pi value
        const prefix = pi.slice(idx, i+1);
        // check if that prefix exisits in the numbers table since that is what we are looking for
        // from the favorite numbers that are provided to the numbersInPi function
        if (prefix in numbersTable) {
            // recursive call to get the min spaces in all the subsets of number suffixes
            const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
            // then set the current minSpaces to the min of what we have already computed for minSpaces
            // (perhaps for a previous index) and the min spaces in suffix + 1
            minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
        }
    }
    // now cache the minSpaces at that index
    cache[idx] = minSpaces;
    return cache[idx];
}

module.exports = numbersInPi