// O(n) Time | O(n) space
// Time: Because we traverse the array in place
// Space: Becuase we only store constant values

function caesarCipherEncryptor(string, key) {
	const newLetters = []
	// we mod 26 here since given we need to wrap the alphabet around in this cipher if the key is > 26 then we can just take the remainder and not have to condider anything more when the key is > 26
	const newKey = key % 26

	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey))
	}
	return newLetters.join('');
}


function getNewLetter(letter, key) {
	// charCodeAt returns the unicode value of the letter
	const newLetterCode = letter.charCodeAt() + key
	// when the code is <= 122 then we are within the possible alphabet range of a-z (92 - 122). However, if the code is > 122 then we need to wrap around so we take the new code mod 122 to get the remainder and add that to 96 (the code just before a). For example, if the code is 124 then we should return the letter b. So 124 % 122 is 2 and 96 + 2 = 98 === 'b'.
	return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
}
module.exports = caesarCipherEncryptor