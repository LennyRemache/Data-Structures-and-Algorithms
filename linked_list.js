// Singly Linked List

class Node {
  /* 
    An object for storing a single node of a linked list. 
    Modles two attributes - data and the link to the next node in the list
  */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  push(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;

    return this;
  }
}

//let nodeOne = new Node(10);
//console.log(nodeOne.data);

let arr = new SinglyLinkedList();
console.log("Array is empty?", arr.isEmpty());
console.log(arr.head);

arr.push("Hi there");

console.log("Array is empty?", arr.isEmpty());
console.log(arr.head);
console.log(arr.tail);

arr.push(7);

console.log("Array is empty?", arr.isEmpty());
console.log(arr.head);
console.log(arr.tail);

arr.push("42");

console.log("Array is empty?", arr.isEmpty());
console.log(arr.head);
console.log(arr.tail);

console.log("Array length:", arr.length);
