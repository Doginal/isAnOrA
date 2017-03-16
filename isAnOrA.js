var _ = require('lodash');
function isAnOrA(word) {
	var first_char = word.substring(0, 1);
	first_char = first_char.toLowerCase();
	var vowels = [{
		vowel: 'a'
	}, {
		vowel: 'e'
	}, {
		vowel: 'i'
	}, {
		vowel: 'o'
	}, {
		vowel: 'u'
	}];
	var index = _.findIndex(vowels, {
		vowel: first_char
	});
	if (index !== -1) {
		return 'an';
	} else {
		return 'a';
	}
};

exports.isAnOrA = isAnOrA;