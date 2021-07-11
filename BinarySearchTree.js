class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
        }else{
            let current = this.root
            while(true){
               if(current.val === val) return undefined
               if(val > current.val){
                   if(!current.right){
                       current.right = newNode
                       break
                   }
                    current = current.right
               }else{
                   if(!current.left){
                       current.left = newNode
                       break
                   }
                    current = current.left
               }
            }
        }
        return this
    }
    RInsert(node,val){
        if(node === null){
            let newNode = new Node(val)
            node = newNode
        }
        if(val < node.val) return this.RInsert(node.left,val)
        if(val > node.val) return this.RInsert(node.right,val)
    }

    contains(val){
        let current = this.root
        while(current){
            if(current.val === val) return true
            else if(val > current.val) current = current.right
            else current = current.left
        }
    }
    search(val){
    
        function helper(node){
            if(!node) return false
            if(node.val === val) return true
            if(val < node.val) return helper(node.left)
            if(val > node.val) return helper(node.right)
        }
        return helper(this.root)
    }
    BFS(){
        let queue = [this.root],
            visited = [],
            current
        while(queue.length){
            current = queue.shift()
            visited.push(current.val)

            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        return visited
    }
    DFSPreOrder(){
        let visited = []

        function visit(node){
            visited.push(node.val)
            if(node.left) visit(node.left)
            if(node.right) visit(node.right)
        }
        visit(this.root)
        return visited
    }
    DFSPostOrder(){
        let visited = []

        function visit(node){
            if(node.left) visit(node.left)
            if(node.right) visit(node.right)
            visited.push(node.val)
        }
        visit(this.root)
        return visited
    }
    min(){
        function helper(node){
            if(!this.root) return null
            if(!node.left) return node.val
            return helper(node.left)
        }
        return helper(this.root)
    }
    height(){
        function helper(node){
            if(!node.next && !node.right) return 0
            return 1 + Math.max(helper(node.left),helper(node.right))
        }
        return 1 + helper(this.root)
    }
}
let tree = new BinarySearchTree()
tree.RInsert(this.root,10)
tree.RInsert(this.root,7)
tree.RInsert(this.root,15)
tree.RInsert(this.root,8)
tree.RInsert(this.root,12)
tree.RInsert(this.root,3)
