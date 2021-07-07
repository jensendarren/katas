// O(n^2) time | O(n) space
function diskStacking(disks) {
    // sort all the disks by the height
    disks.sort((a, b) => a[2] - b[2]);
    // store the max possible heights for each disk at their index if they were the only disk used (which we use for max height comparrison later)
    const heights = disks.map(disk => disk[2]);
    // create an empty array for the sequences of the length of the disks
    const sequences = new Array(disks.length);
    let maxHeightIdx = 0;
    for (let i = 1; i < disks.length; i++) {
        const currentDisk = disks[i];
        for (let j = 0; j < i ; j++) {
            const otherDisk = disks[j];
            // now we just need to check are the dimensons valid based on the problem
            if(areValidDimensions(otherDisk, currentDisk)) {
                // if the combined hight of the current disk and the other disk is greater then update the hight at this index and add to the sequences
                if(heights[i] <= currentDisk[2] + heights[j]) {
                    heights[i] = currentDisk[2] + heights[j]
                    sequences[i] = j;
                }
            }
        }
        // if the height at current i is greater or equal to the current max hight stored then update that index
        if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
    }

    return buildSequence(disks, sequences, maxHeightIdx)
}

// just compare each dimention of the current disk, c with the other disk, o
function areValidDimensions(o, c) {
    return o[0] < c[0] && o[1] < c[1] && o[2] < c[2];
}

// helper to build up the current sequence to retrurn as the solution
function buildSequence(array, sequences, currentIdx) {
    const sequence = [];
    while(currentIdx !== undefined) {
        sequence.unshift(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    return sequence;
}

module.exports = diskStacking