/*  O(c * (n + m)) time | O(c) space - where n is the number of characters and m is the length of the document and c is the number of uniuqe characters in the document. We only need to multiple the two sting lenghs, n + m by the unique set of characters in the document m since we will ensure that we only calculate the frequency of that character once.

This solution is similar to the first so I'll just comment on the differences in the code below.
*/
function generateDocument(characters, document) {
    // create a set to hold a count of each unique character in the document and its frequency
    const alreadyCounted = new Set();

    for (const character of document) {
        // if the current character is already in the set then just continue
        if (character in alreadyCounted) continue;

        const documentFrequency = countCharacterFrequency(character, document);
        const characterFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > characterFrequency) return false;

        // add the current character to our set so that we dont count it again
        alreadyCounted.add(character);
    }
    return true;
}


function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    }

    return frequency;
}

module.exports = generateDocument