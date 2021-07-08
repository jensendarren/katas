// O(n) Time | O(n) Space

/*
General idea with this solution is to calculate the max col height
to the left of each index and the max to the right of each index and
use that to determin the higest volume of water that can stay withing the
boundary of the columns.

Instead of creating three arrays we just have two in the below solution.
*/
function waterArea(heights) {
    const maxes = new Array(heights.length).fill(0)
    let leftMax = 0;
    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];
        maxes[i] = leftMax;
        leftMax = Math.max(leftMax, height);
    }
    let rightMax = 0;
    // find the right max of each index and compare that wiht the left maxes
    // already stored in the maxes index above
    for (let i = heights.length - 1; i>=0; i--) {
        const height = heights[i];
        const minHeight = Math.min(rightMax, maxes[i]);
        if(height < minHeight) {
            maxes[i] = minHeight - height;
        } else {
            maxes[i] = 0;
        }
        // update the right max for the next iteration
        rightMax = Math.max(rightMax, height);
    }
    return maxes.reduce((a, b) => a + b, 0)
}

module.exports = waterArea