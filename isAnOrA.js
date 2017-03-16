// Copyright (c) 2017 Alex Griggs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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