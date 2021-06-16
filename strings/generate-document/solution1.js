/*  O(m * (n + m)) time | O(1) space - where n is the number of characters and m is the length of the document
This is because we loop though each character of the document and then sub-loop the document again as well as the characters which means we perform a loop of n + m for every character, m in the document.
*/
function generateDocument(characters, document) {
    // Loop every character in the document
    for (const character of document) {
        // count the frequency of the current char in the document
        const documentFrequency = countCharacterFrequency(character, document);
        // count the frequencey of the current char in  the caracters
        const characterFrequency = countCharacterFrequency(character, characters);
        // if the char appears more times in the document than in the character list then we
        // are unable to generate the document from the character list so we return false here.
        if (documentFrequency > characterFrequency) return false;
    }

    // since we have looped all the characters in the document and the chararacters
    // therefore our condition holds true and we can generate the document
    return true;
}

// helper function to count the chars frequency in a string
// returns the frequency a character appears in a target string
function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    }

    return frequency;
}

module.exports = generateDocument