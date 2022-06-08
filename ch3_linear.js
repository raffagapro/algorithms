const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const largeArray = new Array(1000000).fill('nemor');
largeArray.push('nemo');

const findNemo = array =>{
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') console.log('Found Nemo');
    }
}

//big 0
//0(n) = Linear
//Means that the time complexity of the algorithm is directly proportional to the size of the input.
//One operation is performed for each element in the input.

findNemo(nemo);
findNemo(everyone);
findNemo(largeArray);