class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length === 0) return undefined

        const lastNode = this.tail
        
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            lastNode.prev = null
        }
        this.length--
        return lastNode
    }
    shift(){
        if(this.length === 0) return undefined

        const firstNode = this.head
        
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
            firstNode.next = null
        }
        this.length--
        return firstNode
    }
    unshift(val){
        let newHead = new Node(val)
        if(this.length === 0){
            this.head = newHead
            this.tail = newHead
        }else{
            newHead.next = this.head
            this.head.prev = newHead
            this.head = newHead
        }
        this.length++
        return this
    }
    get(idx){
        idx = Math.round(idx)
        if(idx < 0 || idx > this.length - 1 || (!idx && idx !== 0)) return null
        let currentIdx, currentNode
        if(idx <= this.length / 2 ){
            currentIdx = 0
            currentNode = this.head
            while(currentIdx < idx){
                currentNode = currentNode.next
                currentIdx++
            }
        }else{
            currentIdx = this.length - 1
            currentNode = this.tail
            while(currentIdx > idx){
                currentNode = currentNode.prev
                currentIdx--
            }
        }
        return currentNode
    }
    set(idx,val){
        const node = this.get(idx)
        if(!node)return false
        node.val = val
        return true
    }
    insert(idx,val){
        if(idx < 0 || idx > this.length) return false
        if(idx === 0) return !!this.unshift(val)
        if(idx === this.length) return !!this.push(val)

        //normal inserting
        const node = this.get(idx - 1)
        const newNode = new Node(val)

        newNode.next = node.next
        node.next.prev = newNode
        node.next = newNode
        newNode.prev = node

        this.length++
        return true
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined
        if(idx === 0) return this.shift()
        if(idx === this.length - 1) return this.pop()

    //normal removal
        const removedNode = this.get(idx)
        //remove connections
        node.prev.next = node.next
        node.next.prev = node.prev
        //return the node
        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode
    }
    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prevNode = null 
        let nextNode = null
        for(let i = 0; i < this.length; i++){
            nextNode = current.next
            current.prev = nextNode
            current.next = prevNode
            prevNode = current
            current = nextNode
        }
        return this
    }
}


