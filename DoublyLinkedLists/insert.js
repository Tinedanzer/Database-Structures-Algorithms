class Node{
    constructor(val){
        this.value=val;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedLists{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode=new Node(val);if(!this.head){this.head=newNode;this.tail=newNode;}
        else{this.tail.next=newNode;newNode.prev=this.tail;this.tail=newNode;}this.length++;return this;}
    unshift(val){let newNode=new Node(val);
        if(this.length===0){this.length++;this.head=newNode;this.tail=newNode;return this}
        this.head.prev=newNode;newNode.next=this.head;this.head=newNode;this.length++;return this;}
    get(i){
        if(i<0||i>=this.length){console.log('this happened'); return null};
        let avg=this.length/2-1;
        if(i<=avg){let counter=0;let aroo=this.head;
            while(1){if(i===counter)return aroo;counter++;aroo=aroo.next;}}
        else{let counter=this.length-1;let aroo=this.tail;
            while(1){if(i===counter)return aroo;counter--;aroo=aroo.prev;}}}
    insert(val,i){
        if(i===0)return !!this.unshift(val);
        if(i+1===this.length)return !! this.push(val);
        let aroo=this.get(i);
        if(!aroo){console.log('beep bop, returning false, beeop');return false;}
        let newNode= new Node(val);
        newNode.prev=aroo.prev;
        newNode.next=aroo;
        aroo.prev.next=newNode;
        aroo.prev=newNode;
        this.length++
        return true;
    }
}
const newList= new DoublyLinkedLists;
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.push('aroo4zz');
newList.insert('oogaboogado',3);
console.log(newList);