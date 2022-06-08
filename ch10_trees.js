//binary search tree
//the right child is always greater than the parent
//the left child is always less than the parent

class bstNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(data){
        if(this.root === null){
            this.root = new bstNode(data);
            return;
        }
        let current = this.root;
        while(true){
            if(data < current.data){
                if(current.left === null){
                    current.left = new bstNode(data);
                    return;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = new bstNode(data);
                    return;
                }
                current = current.right;
            }
        }
    }

    lookup(data){
        if(this.root === null) return false;
        let current = this.root;
        while(current){
            if(data < current.data){
                current = current.left;
            }else if(data > current.data){
                current = current.right;
            }else{
                return current;
            }
        }
        return false;
    }

    remove(data){
        if(this.root === null) return false;
        let current = this.root;
        let parent = null;
        while(current){
            if(data < current.data){
                parent = current;
                current = current.left;
            }else if(data > current.data){
                parent = current;
                current = current.right;
            }else{
                //we have a match, get to work!
                //Option 1: No right child:
                if(current.right === null){
                    if(parent === null){
                        this.root = current.left;
                    }else{
                        //if parent > current, make current left child a child of parent
                        if(current.data < parent.data){
                            parent.left = current.left;
                        }else if(current.data > parent.data){
                            parent.right = current.left;
                        }
                    }
                }else{
                    //Option 2: Right child which doesnt have a left child
                    let tempNode = current.right;
                    let tempParent = current;
                    while(tempNode.left !== null){
                        tempParent = tempNode;
                        tempNode = tempNode.left;
                    }
                    //now tempNode is the left most child of the right child of our current node
                    //with tempParent being it's parent
                    if(parent === null){
                        this.root = tempNode;
                    }else{
                        if(current.data < parent.data){
                            parent.left = tempNode;
                        }else if(current.data > parent.data){
                            parent.right = tempNode;
                        }
                    }
                    tempNode.left = current.left;
                }
                return true;
            }
        }
        return false;
    }

    print(){
        if(this.root === null){
            return;
        }
        let current = this.root;
        let queue = [];
        queue.push(current);
        while(queue.length > 0){
            current = queue.shift();
            console.log(current.data);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }
}

const myBST = new BinarySearchTree();
myBST.insert(10);
myBST.insert(9);
myBST.insert(19);
myBST.insert(5);
myBST.insert(1);
myBST.insert(31);
myBST.print();
console.log(myBST.lookup(7));

//av trees and black/red trees are balance binary trees