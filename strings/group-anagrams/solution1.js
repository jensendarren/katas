// O(w * n * log(n) + n * w * log(w)) Time and O(wn) Space where w is the number of words and n is the length of the longest word

function groupAnagrams(words) {
	if(words.length === 0) return [];

	const sortedWords = words.map(word => word.split('').sort().join(''));
	const indicies = [...Array(words.length).keys()];
	indicies.sort((a,b) => {
		if (sortedWords[a] < sortedWords[b]) return -1;
		if (sortedWords[a] > sortedWords[b]) return 1;
		return 0
	});

	const result = [];
	let currentAnagramGroup = [];
	let currentAnagram = sortedWords[indicies[0]];
	for (const index of indicies) {
		const word = words[index];
		const sortedWord = sortedWords[index];

		if (sortedWord === currentAnagram) {
			currentAnagramGroup.push(word);
			continue;
		}

		result.push(currentAnagramGroup)
		currentAnagramGroup = [word]
		currentAnagram = sortedWord;
	}

	result.push(currentAnagramGroup);

	return result
}

module.exports = groupAnagrams