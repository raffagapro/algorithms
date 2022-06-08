let arr2 = [5, 3, 1, 2, 4];
let arr = [8, 4, 3, 1, 9];

const findMedian = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}
console.log(findMedian(arr));

let matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 99, 114, 108]
];

const flippingMatrix = matrix => {
    //thinking of flipping rows and colums to get the highet sum of a 2x2 qudrant
    //the following pos are only exchangable between them 00, 03, 30, 33 (corners)
    //the following pos are only exchangable between them 01, 02, 31, 32 (inner tops/bottoms)
    //the following pos are only exchangable between them 10, 13, 20, 23 (edges left/right)
    //the following pos are only exchangable between them 11, 12, 21, 22 (inner corner)
    //so you only need to find the highest of each and sum it, by respecting the above rules, you are only flipping rows & cols
    let n = matrix.length /2;
    let max = 0;
    let total = 0;
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            max = Math.max(matrix[row][col], max);
            max = Math.max(matrix[row][2 * n - col -1], max);
            max = Math.max(matrix[2 * n - row - 1][col], max);
            max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max);
            total += max;
        }
    }
    return total;
}  

console.log(flippingMatrix(matrix));

const test = 'III';

const romanToInt = (s) => {
    let result = 0;
    for(i = 0; i< s.length; i++){
        switch (s[i]) {
            case 'I':
                if(s[i+1] === 'V') {
                    i++;
                    result += 4;
                }else if(s[i+1] === 'X') {
                    i++;
                    result += 9;
                }else result++;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if(s[i+1] === 'L') {
                    i++;
                    result += 40;
                }else if(s[i+1] === 'C') {
                    i++;
                    result += 90;
                }else result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                if(s[i+1] === 'D') {
                    i++;
                    result += 400;
                }else if(s[i+1] === 'M') {
                    i++;
                    result += 900;
                }else result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;   
}

console.log(romanToInt(test));