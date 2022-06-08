const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'i'];
const arr3 = ['z', 'y', 'x'];

const commonElement = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) return true; //O(n)
    }
    return false;
}

console.log('INCLUDE:', commonElement(arr1, arr2));
console.log('INCLUDE:', commonElement(arr1, arr3));

//hash tables
//Set.has O(1)
const commonHashTable = (arr1, arr2) => {
    return arr1.some(el => arr2.includes(el)); //O(n)
}

console.log('HASHTABLE:', commonHashTable(arr1, arr2));
console.log('HASHTABLE:', commonHashTable(arr1, arr3));


const myBigFunction = value => {

    //MANERA TRADICIONAL
    if (value === 'hint') console.log('This is a hint');
    else if (value === 'error') console.log('This is an error');
    else console.log('This is a default');

    //COMO SE LLEMA ESTO?
    const responsesObj = {
        hint: () => console.log('This is a hint'),
        error: () => console.log('This is an error'),
        default: () => console.log('This is a default')
    }
    responsesObj[value]?.();

}

