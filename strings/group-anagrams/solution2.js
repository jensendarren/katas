// O(w * n * log(n)) time | O (wn) space where w is the number of words and n is the length of the longest word
function groupAnagrams(words) {
    // we use a hashtable / object to store the anagrams sorted word as the key
	const anagrams = {}
    // loop round all the words in the array
	for (const word of words) {
        // sort each word
		const sortedWord = word.split('').sort().join('');
		if (sortedWord in anagrams) {
            // if the current sorted word is already in our hash table as key
            // then append the original unsorted word to the array at that key
			anagrams[sortedWord].push(word)
		} else {
            // otherwise we just create an array with that word
			anagrams[sortedWord] = [word];
		}
	}
	return Object.values(anagrams)
}

module.exports = groupAnagrams