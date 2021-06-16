/*
O(n + m) time | O(c) space - where n is the number of characters and m is the lenght of the document and c is the number of unique characters in the characters string.

This is because we only need to loop each string of characters one time O(n+m) and we store the unique set of charaters and the frequency of these characters in auxillary storage O(c).
*/
function generateDocument(characters, document) {
    // Create an empty object to store the character counts
    const characterCounts = {};

    // loop each character in the character set and add each unique character to the set
    // incrementing the frequency each time we reach the same character
    for (const character of characters) {
        // if the character is not yet in the character counts as a key then set it with a default of 0
        if (!(character in characterCounts)) characterCounts[character] = 0;

        // since we have already added the character as a key we can increment its frequency directly
        characterCounts[character]++;
    }

    // loop each character in document
    for(const character of document) {
        // if the character is not in the character counts then we cant possibly produce the document
        // or if the character is in the character counts but its counter is 0 then we also cannot product the document
        if (!(character in characterCounts) || characterCounts[character] === 0) return false;

        // everytime we use a character from the available characters set, decremeent the counter so that we dont use it again and then the above condition will hold.
        characterCounts[character]--;
    }

    return true;
}

module.exports = generateDocument