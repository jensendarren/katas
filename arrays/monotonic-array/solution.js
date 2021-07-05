// O(n) time | O(n) space

// Do 2 checkes: if the array is non decreasing (trending upwards)
// or is it non increasing (trending downwards)
function isMonotonic(array) {
    let isNonDecreasing = true;
    let isNonIncreasing = true;

    // simply loop all values and check if the previous is greater or less than the current
    // and depending on that the array is either non decreasing or non increasing
    for(let i=1; i<array.length; i++) {
        if (array[i] < array[i-1]) isNonDecreasing = false;
        if (array[i] > array[i-1]) isNonIncreasing = false;
    }

    return isNonDecreasing || isNonIncreasing;
}

module.exports = isMonotonic