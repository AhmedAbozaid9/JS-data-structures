class MaxBinaryHeap {
    constructor(){
        this.values = []
    }

    insert(val){
        this.values.push(val)
        let idx = this.values.length - 1
        let parentIdx = Math.floor((idx - 1)/2)
        while(this.values[idx] > this.values[parentIdx]){
            let temp = this.values[idx]
            this.values[idx] = this.values[parentIdx]
            this.values[parentIdx] = temp
            idx = parentIdx
            parentIdx = Math.floor((idx - 1)/2)
            }
        }
    extractMax(){
        [this.values[0],this.values[this.values.length - 1]] =
        [this.values[this.values.length - 1],[this.values[0]]]   
        let result = this.values.pop()
        let idx = 0
        while(true){
            let left = 2 * idx + 1
            let right = left + 1
            let swapEl = this.values[left] > this.values[right] ? left : right
            if(this.values[idx] < this.values[swapEl]){
                [this.values[idx], this.values[swapEl]] = 
                [this.values[swapEl], this.values[idx]]
                idx = swapEl
            }else break
        }
        return result
    }
    
}
let heap = new MaxBinaryHeap()
for(let i of [1,9,15,61,70,88,106,301]){
    heap.insert(i)
}
  
