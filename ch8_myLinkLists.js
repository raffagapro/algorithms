class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index === 0) return this.prepend(value);
        if(index >= this.length) return this.append(value);
        let parentNode = this.lookUp(index - 1);
        const newNode = new Node(value);
        newNode.next = parentNode.next;
        parentNode.next = newNode;
        this.length++;
        return this;
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

    remove(index){
        if(index >= this.length) return undefined;
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else{
            const parentNode = this.lookUp(index - 1);
            removedNode = parentNode.next;
            parentNode.next = removedNode.next;
            if (index === this.length - 1) this.tail = parentNode;
        }
        this.length--;
        return removedNode;
    }

    lookUp(index){
        let indexCounter = 0;
        let currentNode = this.head;
        while(indexCounter !== index){
            currentNode = currentNode.next;
            indexCounter++;
        }
        return currentNode;
    }
    getLength(){
        console.log(this.length);
    }
    getHead(){
        console.log('HEAD: ', this.head);
    }
    getTail(){
        console.log('TAIL: ', this.tail);
    }
}

const myLinkList = new LinkList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.prepend(1);
myLinkList.printList();
myLinkList.insert(3, 99);
myLinkList.printList();
myLinkList.getLength();
console.log('SEARCHED: ', myLinkList.lookUp(3));
myLinkList.getHead();
console.log('REMOVE: ', myLinkList.remove(0));
myLinkList.getHead();
myLinkList.printList();
