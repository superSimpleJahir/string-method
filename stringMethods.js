const sentence = 'The Quick Brown fox jumps over the lazy dog.';

const index = 4;

// charAt()
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);


// charCodeAt()
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

// concat()
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));


// endsWith()
const str3 = 'Cats are the best!';

console.log(str1.endsWith('the', 0));

console.log(str1.endsWith('best', 17));

const str4 = 'Is this a question?';

console.log(str2.endsWith('question?'));

// fromCodePoint()
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));


// includes()
const sentence1 = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';

console.log(`The word "${word}" ${sentence1.includes(word) ? 'is' : 'is not'} in the sentence`);

// indexOf()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}`);

// lastIndexOf()
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

// localeCompare()
const a = 'réservé';
const b = 'RESERVE';

console.log(a.localeCompare(b));


// match()
const regex = /[A-Z]/g;
console.log(sentence.match(regex));

// padEnd() The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
console.log(sentence1.padEnd(60, '='));
console.log(sentence1.padStart(50, '='));

// repeat()
const jahir = 'Happy!';
console.log(`I am ${jahir.repeat(3)}`);

// replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

// replaceAll()
console.log(p.replaceAll('dog', 'monkey'));

// search()
console.log(p.search('dog'));


// slice()
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
console.log(str.slice(4, 19));
console.log(str.slice(-4));
console.log(str.slice(-9, -5));

// split() return array
const words = str.split(' ');
console.log(words[3]);

const chars = str.split('');
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


// substring()
const str5 = 'Mozilla';

console.log(str5.substring(1, 3));
// Expected output: "oz"

console.log(str5.substring(2));
// Expected output: "zilla"

// trim()
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
