const arr1 = [1,3,5,6,7,7,9,10];
const arr2 = [2,3,5,6,8,8,9,11,13,15];

//assuming arrays are sorted
const findPairSum = (arr, sum) => {
    //work with indexes not values!!!!
    let lowerNum = 0; //1
    let higherNum = arr.length - 1; //7
    //if the indexs cross each other, there is no pair
    while (lowerNum < higherNum) { //1 < 7
        let currentSum = arr[lowerNum] + arr[higherNum]; //8
        if (currentSum === sum) { //8 === 8?
            return true;
        } else if (currentSum < sum) { //10 < 8?
            lowerNum++;
        } else { //10 > 8?
            higherNum--;
        }
    }
    return false;
}

//using the reminding solution
const findPairSum2 = (arr, sum) => {
    const discartedArr = []; //[0,0,0,0,6,5,0,3,2]
    for (let i = 0; i < arr.length; i++) {
        if (discartedArr[arr[i]]) return true; //discartedArr[8] === undefined?
        discartedArr[sum - arr[i]] = arr[i]; //(10-6)discartedArr[4] = 6
    }
    return false;
}

console.log(findPairSum2(arr1, 11));
console.log(findPairSum2(arr2, 7));
console.log(findPairSum(arr1, 3));
console.log(findPairSum(arr2, 10));