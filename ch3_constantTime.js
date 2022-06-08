const sonstTime = array =>{
    console.log(array[0]);
}

//0(1) = Constant time
//Means that regardless of the size of the input, the time complexity of the algorithm is the same.

//Excercise 1
//What is the Big 0?
const funChallenge = input =>{
    let a = 10; //0(1)
    a = 50 + 3; //0(1)

    for (let i = 0; i < input.length; i++) { //0(n)
        anotherFunction(); //0(n)
        let strange = true; //0(n)
        a++; //0(n)
    }
    return a; //0(1)
}

//Answer
//Big 0 is (1 + 1 + n + n + n + n + 1) = Big 0(3 + 4n) = 0(n) ??????? WHY?

//Excersice 2
//What is the Big 0?
const anotherFunChallenge = input =>{
    let a = 5; //0(1)
    let b = 10; //0(1)
    let c = 50; //0(1)
    for (let i = 0; i < input.length; i++) {
        let x = i + 1; //0(n)
        let y = i +2; //0(n)
        let z = i + 3; //0(n)
    }
    for (let j = 0; j < input.length; j++) {
        let p = j * 2; //0(n)
        let q = j * 2; //0(n)
    }
    let whoAmI = `I don't know`; //0(1)
}

//Answer
// (1 + 1 + 1 + n + n + n + n + n + 1 ) = Big 0(4 + 5n) = 0(n)