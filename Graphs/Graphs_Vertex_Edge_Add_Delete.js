// undirected graph(meaning edges go both ways)
class Graph{
    constructor(){
        this.adjacenyList= {}
    }
    // establishes the vertex before connecting edges; creating new key with a value of empty array
    addVertex(vertex){
        if(!this.adjacenyList[vertex])
        this.adjacenyList[vertex]=[]
    }
    // creating an undirected graph; meaning edges must go both ways from both vertices.
    addEdge(vertex,connect){
        this.adjacenyList[vertex].push(connect);
        this.adjacenyList[connect].push(vertex);
    }
    removeEdge(vertex,connect){
        // let x= this.adjacenyList[vertex].indexOf(connect);
        // let y=this.adjacenyList[connect].indexOf(vertex);
        // this.adjacenyList[vertex].splice(x,1);
        // this.adjacenyList[connect].splice(y,1);
// better method, ^^ above method would splice the array while the for loop is trying to cover it;
// causing unexpected results. Filtering an array for the values you want or dont want is better
// in this case.
        this.adjacenyList[vertex] = this.adjacenyList[vertex].filter(v=> v!==connect)
        this.adjacenyList[connect] = this.adjacenyList[connect].filter(v=> v!==vertex)

    }
    removeVertex(vertex){
        for(let x of this.adjacenyList[vertex]){
            this.removeEdge(vertex, x)
        }
        // deleting an object Key to completely remove it, after we removed its values.
        delete this.adjacenyList[vertex]
    }
}
let aroo= new Graph();
aroo.addVertex('pikaboo')
aroo.addVertex('shire')
aroo.addVertex('arookaboo')
aroo.addVertex('Carebearland')
aroo.addEdge('pikaboo','Carebearland')
aroo.addEdge('shire','Carebearland')
aroo.addEdge('arookaboo','Carebearland')
aroo.addEdge('pikaboo','shire')
aroo.addEdge('pikaboo','arookaboo')
aroo.removeEdge('pikaboo','arookaboo')
aroo.removeVertex('pikaboo');
console.log(aroo);