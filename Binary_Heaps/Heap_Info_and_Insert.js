// only main rule is that the children must be less than the parent; nodes are filled in left to right.

// For Binary Heaps: using an array;
// For an index of an array 'N'..... the left child is stored at 2n+1; the right at 2n+2;
// to find a Parent node from a child use .floor((n-1)/2)
class MaxBinaryHeap{
    constructor(){
        this.values=[];
    }
    insert(value){
        this.values.push(value);
        if(this.values.length===1)return this;
        this.bubble(value);
    }
    bubble(value){
//finding last index with this.values.length-1; then applying formula to find parentIndex;.floor(n-1)/2
        let currentIndex=this.values.length -1;
        let parentIndex=Math.floor(((currentIndex-1)/2))
        console.log(parentIndex);
        while(value>this.values[parentIndex]){
            // swap index of value with parent, then update parent; then good game.
            // do the same with temp  indexes as you did w/ the values;
            let temp=this.values[parentIndex];
            this.values[parentIndex]=this.values[currentIndex];
            this.values[currentIndex]=temp;
            currentIndex=parentIndex;
            parentIndex=Math.floor(((currentIndex-1)/2));
        }
        return this;
    }
}
let arooMan=new MaxBinaryHeap();
arooMan.insert(5);
arooMan.insert(95);
arooMan.insert(10);
arooMan.insert(13);
arooMan.insert(42);
arooMan.insert(65);
arooMan.insert(50);
arooMan.insert(100);
arooMan.insert(43);
console.log(arooMan);