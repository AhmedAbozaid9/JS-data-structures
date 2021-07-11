class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let el = new Node(val)
        if(!this.head){
            this.head = el
            this.tail = this.head
        }else{
            this.tail.next = el
            this.tail = el
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let current = this.head
        let pre = current
        while(current.next){
            pre = current
            current = current.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if(this.length === 0) this.tail = null
        return oldHead
    }
    unshift(val){
        let el = new Node(val)
        if(!this.head){
            this.head = el
            this.tail = this.head
        }else{
            el.next = this.head
            this.head = el
        }
        this.length++
        return this
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter < idx){
            current = current.next
            counter++
        }
        return current
    }
    
    set(idx,val){
        if(idx < 0 || idx >= this.length) return null
        let oldEl = this.get(idx)
        if(!oldEl) return false
        oldEl.val = val
        return true
    }
    insert(idx,val){
        if(idx < 0 || idx > this.length) return false
        if(idx === 0) return !!this.unshift(val)
        if(idx === this.length) return !!this.push(val)

        let el = new Node(val)
        let pre = this.get(idx - 1)
        el.next = pre.next
        pre.next = el
        this.length++
        return true
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined
        if(idx === 0) return this.shift()
        if(idx === this.length) return this.pop()

        let pre = this.get(idx - 1)
        let removed = pre.next
        pre.next = removed.next
        this.length--
        return removed
    }
    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next = null
        for(let i = 0; i < this.length;i++){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
    toArray(){
        let res = [] 
        let current = this.head
        while(current){
            res.push(current.val)
            current = current.next
        }
        return res
    }
}


