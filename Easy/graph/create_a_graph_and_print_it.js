// - Date : 30/05/2025
// - Difficulty: Easy
// - Approach :  Graph


class graph{
    constructor(vertex){
        this.vertex = vertex;
        this.adjList = new Array(vertex).fill().map(()=> [])
    }

    addEdges(u,v){
        this.adjList[u].push(v);
        this.adjList[v].push(u);
    }

    printGraph(){
        for(let i=0 ; i<this.vertex ; i++){
            console.log(`${i} => ${this.adjList[i].join(" ")}`);
            
        }
    }
}


let g = new graph(4);

g.addEdges(0,1);
g.addEdges(1,3);
g.addEdges(2,3);

g.printGraph()