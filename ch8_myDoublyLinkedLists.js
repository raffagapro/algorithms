class Node{
    constructor(data, prev = null){
        this.data = data;
        this.next = null;
        this.prev = prev;
    }
}

class LinkList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        this.tail.next = new Node(value, this.tail);
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index === 0) return this.prepend(value);
        if(index >= this.length) return this.append(value);
        let parentNode = this.lookUp(index - 1);
        const newNode = new Node(value, parentNode);
        newNode.next = parentNode.next;
        parentNode.next.prev = newNode;
        parentNode.next = newNode;
        this.length++;
        return this;
    }

    remove(index){
        if(index >= this.length) return undefined;
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        }
        else{
            const parentNode = this.lookUp(index - 1);
            removedNode = parentNode.next;
            parentNode.next = removedNode.next;
            parentNode.next.prev = parentNode;
            if (index === this.length - 1) this.tail = parentNode;
        }
        this.length--;
        return removedNode.data;
    }

    reverse(){
        if (this.length === 1) return this.head.data;
        let currentNode = this.tail;
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;
        while(currentNode){
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            currentNode = prevNode;
            if (currentNode) {
                prevNode = currentNode.prev;
                nextNode = currentNode.next;
            }
        }
        const pervHead = this.head;
        this.head = this.tail;
        this.tail = pervHead;
        return this.printList();
    }

    printList(){
        const arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }

    lookUp(index, obj = false){
        let indexCounter = 0;
        let currentNode = this.head;
        while(indexCounter !== index){
            currentNode = currentNode.next;
            indexCounter++;
        }
        if (obj) return {
            data: currentNode.data,
            next: currentNode.next ? currentNode.next.data : null,
            prev: currentNode.prev ? currentNode.prev.data : null
        }
        return currentNode;
    }
    getLength(){
        console.log(this.length);
    }
    getHead(){
        console.log('HEAD: ', this.head.data);
    }
    getTail(){
        console.log('TAIL: ', this.tail.data);
    }
}

const myLinkList = new LinkList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.append(7);
myLinkList.append(9);
myLinkList.append(2);
// myLinkList.printList();
myLinkList.prepend(1);
// myLinkList.printList();
myLinkList.insert(3, 99);
// myLinkList.printList();
// myLinkList.getLength();
// myLinkList.getHead();
console.log('REMOVE: ', myLinkList.remove(3));
// console.log('SEARCHED: ', myLinkList.lookUp(6, true));
// myLinkList.getHead();
// myLinkList.getTail();
myLinkList.printList();
myLinkList.reverse();
