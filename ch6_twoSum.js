//This is the anwswer to the google interview using Set data
//structure from JS

const twoSum = (nums, target) => {
    const map = new Set(); //[2, 4, 6, 7]
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]; //15 - 11 = 4
        if (map.has(diff)) { //if map has 4
            return [i, nums.indexOf(diff)]; //return [4, 1]
        }
        map.add(nums[i]); 
    }
    return false;
}

const numbers = [2, 4, 6, 7, 11, 13, 15];
const target = 19;

console.log(twoSum(numbers, target));