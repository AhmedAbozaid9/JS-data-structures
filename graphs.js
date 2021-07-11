class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }else console.error("vertex doesn't exist")
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1)
        }else console.error("vertex doesn't exist")
    }
    removeVertex(vertex){
        for(let item of this.adjacencyList[vertex]){
            this.removeEdge(vertex,item)
        }
        delete this.adjacencyList[vertex]
    }
    DFS(){
        let result = []
        let visited = {}
        let firstVertex = Object.keys(this.adjacencyList)[0]
        let vertexes = this.adjacencyList

        function traverse(vertex){
            if(!vertex) return null
            result.push(vertex)
            visited[vertex] = true
            vertexes[vertex].forEach(v => {
                if(!visited[v]) return traverse(v)
            })
        }

        traverse(firstVertex)
        return result
    }
    BFS(){
        const firstVertex = Object.keys(this.adjacencyList)[0]
        const queue = []
        const result = []
        const visited = {}

        queue.push(firstVertex)
        visited[firstVertex] = true

        let current
        while(queue.length){
            current = queue.shift()
            result.push(current)
            this.adjacencyList[current].forEach(neighbour => {
                if(!visited[neighbour]) {
                    queue.push(neighbour)
                    visited[neighbour] = true
                }
            })
        }
        return result
    }
}
let g = new Graph
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')
g.addVertex('e')
g.addVertex('f')
g.addEdge('a','b')
g.addEdge('a','c')
g.addEdge('b','d')
g.addEdge('c','e')
g.addEdge('d','f')
g.addEdge('e','f')
