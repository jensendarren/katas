// O(n^2 + m) time | O(n + m) space
function patternMatcher(pattern, string) {
    // when the pattern length is greater than the string length its not possible to
    // match the pattern in the string so just return an empty array
    if(pattern.length > string.length) return [];
    // generate a new pattern (see below)
    const newPattern = getNewPattern(pattern);
    // keep a note if there was a switch of the pattern for use later
    const didSwitch = newPattern[0] !== pattern[0]
    // keep tracks of the counts of x and y in the pattern
    const counts = {x: 0, y: 0};
    // calculate the first y index position and the counts
    const firstYPos = getCountsAndFirstYPos(newPattern, counts);
    // when we have Y's in the pattern
    if(counts['y'] !==0) {
        // iterate though the entire string vaiable keeping track of the
        // current length of x that we will test in each iteration
        for (let lenOfX =1; lenOfX < string.length; lenOfX++) {
            const lenOfY = (string.length - lenOfX * counts['x']) / counts['y'];
            // if this is -ve number of a decimal then we just continue
            if(lenOfY <=0 || lenOfY % 1 !==0) continue;
            // this is the first index of the y positon
            const yIdx = firstYPos * lenOfX;
            // extract out a candidate for x
            const x = string.slice(0, lenOfX);
            // extract out a candidate for y
            const y = string.slice(yIdx, yIdx + lenOfY);
            // build up the potential match
            const potentialMatch = newPattern.map(char => (char === 'x' ? x : y));
            // compare the potential match with the input string
            if (string === potentialMatch.join('')) {
                // if the pattern was swapped (above) then swap the result of x with y and return it
             return !didSwitch ? [x,y] : [y,x];
            }
        }
    } else {
        // in this else section is when there are no y values in the pattern (so we only have x)
        const lenOfX = string.length / counts['x'];
        if(lenOfX % 1 === 0) {
            const x = string.slice(0, lenOfX);
            const potentialMatch = newPattern.map(char => (char === 'x' ? x : ''));
            if (string === potentialMatch.join('')) {
                return !didSwitch ? [x,''] : ['',x];
            }
        }
    }
	  return [];
}

// returns a list representation of the pattern
// and ensure that the pattern starts with an x
// and swap the x with y if it does not start with x
// makes the implemtation of the matcher function easier
function getNewPattern(pattern) {
    const patternLetters = pattern.split('');
    if(pattern[0] === 'x') {
        return patternLetters;
    } else {
        return patternLetters.map(char=> (char === 'y' ? 'x' : 'y'))
    }
}

// function just updates the counts hash with the
// count of number of x and y and update the hash
// return the y position
function getCountsAndFirstYPos(pattern, counts) {
    let firstYPos = null;
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        counts[char]++;
        if (char === 'y' && firstYPos === null) firstYPos = i;
    }
    return firstYPos;
}

module.exports = patternMatcher