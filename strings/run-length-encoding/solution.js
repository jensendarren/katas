function runLengthEncoding(string) {
    // The input string is guaraneteed to be non-empty, so our first run will be of at least length 1
    const encodedStringCharacters = [];
    let currentRunLength = 1;

    for( let i = 1; i < string.length; i++) {
        const currentCharacter = string[i];
        const previousCharacter = string[i-1];

        if (currentCharacter !== previousCharacter || currentRunLength === 9) {
            encodedStringCharacters.push(currentRunLength.toString());
            encodedStringCharacters.push(previousCharacter);
            currentRunLength = 0;
        }
				currentRunLength++;
    }

    encodedStringCharacters.push(currentRunLength.toString());
    encodedStringCharacters.push(string[string.length - 1]);

    return encodedStringCharacters.join('');
}

module.exports = runLengthEncoding