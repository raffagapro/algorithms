class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(value){
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    pop(){
        const deleteVal = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length--;
        return deleteVal
    }

    shift(){
        const deleteVal = this.data[0];
        for (let i = 0; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        this.pop();
        return deleteVal
    }

    unshift(value){
        this.push(this.data[this.length-1]);
        for (let i = this.length-1; i > 0; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[0] = value;
        return this.length;
    }
}

const testCustomArray = new MyArray();
testCustomArray.push('test');
testCustomArray.push('coca');
testCustomArray.push(5);
testCustomArray.push('erase me motherfucker!');
console.log(testCustomArray);
console.log(testCustomArray.pop());
console.log(testCustomArray);
testCustomArray.push(69);
console.log(testCustomArray);
console.log(testCustomArray.shift());
console.log(testCustomArray);
console.log(testCustomArray.unshift('genesis'));
console.log(testCustomArray);


