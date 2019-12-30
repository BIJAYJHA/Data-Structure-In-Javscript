class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    getTheSizeOfTheLinkedList() {
        console.log("size of the linked list===>", this.size);
    }
    addElementAtFirst(element) {
        let firstNode;
        firstNode = new node(element);
        let current;
        if (this.head === null) {
            this.head = firstNode;
        } else {
            current = this.head;
            this.head = firstNode;
            firstNode.next = current;
        }
        this.size++;
    }

    addElementAtLast(element) {
        let node1;
        node1 = new node(element);
        let current;
        if (this.head === null) {
            this.head = node1;

        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node1;
        }
        this.size++;

    }
    deleteAnyElement(element) {

        let current = this.head;
        let prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    addElemntAfterAnElement(element, newElement) {
        let current = this.head;
        let prev = null;
        let newNode = new node(newElement);
        if (this.head === null) {
            console.log("you cannot add an element after an element on an empty linked list");
        } else {
            while (current != null) {
                if (current.element === element) {
                    console.log("current elemnt====>", current.element);
                    console.log("prev=====>", prev.element);
                    if (current.next === null) {
                        current.next = newNode;
                        newNode.next = null;
                        break;
                    } else {
                        newNode.next = current.next;
                        current.next = newNode;
                        break;

                    }

                    //prev.next=current;
                }
                this.size++;
                prev = current;
                current = current.next;

            }

        }


    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }


}