const firstRepeat = arr =>{
    //iterate thru array
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        //if the current element is not in the object add to obj
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        //if the current element is in the object
        else return arr[i];
    }    
    return undefined;
}

const numbers = [2,5,1,7,3,15,16,8,5];
console.log(firstRepeat(numbers));