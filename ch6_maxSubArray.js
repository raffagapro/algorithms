const maxSubArray = nums => {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; //5
        max = Math.max(max, sum); //6
        if (sum < 0) sum = 0;
    }
    return max;    
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(numbers));
const numbers2 = [1];
console.log(maxSubArray(numbers2));
const numbers3 = [5,4,-1,7,8];
console.log(maxSubArray(numbers3));

const numbers4 = 'hello';
console.log(maxSubArray(numbers4));

const maxSubArray2 = nums => {
    
}