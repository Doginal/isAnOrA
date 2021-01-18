const vowels = ['a', 'e', 'i', 'o', 'u']

function isAorAn(word) {
	
	if (typeof word !== 'string') return false
	if (!vowels.includes(word.charAt(0).toLowerCase())) return 'a'
	return 'an'
	
}
		
