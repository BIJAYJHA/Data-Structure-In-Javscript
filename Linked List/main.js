class main {
    constructor() {
        let ll = new LinkedList();
        ll.addElementAtLast(10);
        ll.addElementAtLast(20);
        ll.addElementAtLast(30);
        ll.printList();
        // console.log("deleteding an element");
        // ll.deleteAnyElement(20);
        // ll.printList();
        ll.addElementAtFirst(1);
        ll.addElementAtFirst(0);
        ll.printList();
        ll.getTheSizeOfTheLinkedList();
        ll.addElemntAfterAnElement(20, 25);
        ll.printList();
        ll.addElemntAfterAnElement(30, 35);
        ll.printList();
    }

}