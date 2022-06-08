const boxes = [1, 2, 3, 4, 5];
//logs all pars of arrays
const logAllPairsOfArray = arr => {
    arr.forEach(a => {
        arr.forEach(b => {
            console.log(a, b);
        });
    });
}

logAllPairsOfArray(boxes);

//0(n^2) = 0(n*n) Quadratic time
