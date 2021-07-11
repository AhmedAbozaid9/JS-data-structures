class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
    
}
class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val){
        const newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }else{
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null
        removedNode.next = null
        if(this.first === this.last){
           this.last = null
        }
        this.first = this.first.next
        this.size--
        removedNode.next = null
        return removedNode.val
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null
        const removedNode = this.first
        if(this.first === this.last){
           this.last = null
        }
        this.first = this.first.next
        this.size--
        removedNode.next = null
        return removedNode.val
    }
}

let list = new Queue()
list.enqueue(2)
list.enqueue(5)
list.enqueue(7)
list.enqueue(11)
list.enqueue(14)
list.enqueue(18)