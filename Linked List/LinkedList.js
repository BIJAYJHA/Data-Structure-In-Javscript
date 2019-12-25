class LinkedList{

    constructor(){
        this.head= null;
        this.size=0;
    }

    addElement(element){
        let node1;
         node1 = new node(element);
        let current;
        if(this.head===null){
            this.head=node1;

        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node1;
        }
        this.size++;

    }

    printList(){
        let curr=this.head;
        let str="";
        while(curr){
            str+=curr.element+" ";
            curr=curr.next;
        }
        console.log(str);
    }

    
}