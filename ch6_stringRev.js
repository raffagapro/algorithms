const stringRev = str => str.split('').reverse().join('');
const stringRev3 = str => [...str].reverse().join('');
const stringRev2 = str => {
    if (typeof str !== 'string') return 'Not a string';
    if (str.length < 2) return str;
    return str.split('').reverse().join('');
}

console.log(stringRev('this is a test'));
console.log(stringRev2('this is a test'));
console.log(stringRev3('this is a test'));
console.log(stringRev2(35));
console.log(stringRev2(1));
console.log(stringRev2());