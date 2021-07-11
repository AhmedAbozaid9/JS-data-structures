class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }
    hash(key){
        let total = 0
        for(let i = 0;i < Math.min(key.length,100);i++){
            let val = key[i].charCodeAt(0) - 96
            total = (total * 31 + val) % this.keyMap.length
        }
        return total
    }
    set(key,val){
        if(!this.keys().includes(key)){
            let idx = this.hash(key)
            let el = [key,val]
            if(!this.keyMap[idx]){
                this.keyMap[idx] = []
             }
            this.keyMap[idx].push(el)
        }
        //override the data 
        for(let idx of this.keyMap){
            if(idx){
                for(let el of idx){
                    if(el[0] === key){
                        el[1] = val
                    }
                }
            }
        }

    }
    get(key){
        let idx = this.hash(key)
        if(this.keyMap[idx]){
            for(let el of this.keyMap[idx]){
                if(el[0] == key) return el[1]
            }
        }
        return undefined
    }
    keys(){
        let keys = []
        for(let idx of this.keyMap){
            if(idx){
                for(let el of idx) keys.push(el[0])
            }
        }
        return keys
    }
    values(){
        let values = []
        for(let idx of this.keyMap){
            if(idx){
                for(let el of idx){
                    let val = el[1]
                    if(!values.includes(val)) values.push(val)
                }
            }
        }
        return values
    }
}
let ht = new HashTable(3)
ht.set('sunday',0)
ht.set('monday',1)
ht.set('tuesday',2)
ht.set('wednesday',3)
ht.set('thursday',4)
ht.set('friday',5)
ht.set('saturday',5)
ht.set('saturday',18)

