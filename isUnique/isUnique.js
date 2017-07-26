/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
	const set = new Set();
	for (let i = 0; i < str.length; i++) {
		if (set.has(str[i])) return false;
		set.add(str[i]);
	}
	return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
