class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.top = node;
            this.bottom = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }
    pop(){
        if(this.isEmpty()) return null;
        let temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    }
    isEmpty(){
        return this.length === 0;
    }
    list(){
        let current = this.top;
        let list = [];
        while(current){
            list.push(current.data);
            current = current.next;
        }
        console.log(list);
    }
}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');
myStack.list();
// console.log(myStack.peek());
// myStack.pop();
// myStack.list();


//myQueue

class Node2{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(data){
        let node = new Node2(data);
        if(this.isEmpty()){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }
    dequeue(){
        if(this.isEmpty()) return null;
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp;
    }
    isEmpty(){
        return this.length === 0;
    }
    list(){
        let current = this.first;
        let list = [];
        while(current){
            list.push(current.data);
            current = current.next;
        }
        console.log(list);
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.list();
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.list();
