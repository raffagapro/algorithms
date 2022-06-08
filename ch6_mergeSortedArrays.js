const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const arr3 = [];

const mergeSortedArrays = (arr1, arr2) =>{
    if (
        typeof arr1 !== 'object' || 
        typeof arr2 !== 'object'
    ) return 'Not an array';
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    return [].concat(arr1, arr2).sort((a, b) => a - b);
}

const result = mergeSortedArrays(arr1, arr2);

console.log(result);

console.log(result.length);
console.log(mergeSortedArrays(arr3, arr1));