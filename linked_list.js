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
    /*
      Adds new Node containing data at tail of the list
      O(1) time complexity
    */
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

  search(key) {
    // O(n)
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  insert(data, index) {
    /*
      Inserts a new Node containing data at index position
      INsertion takes O(1) time but finding the node at the
      insertion point takes O(n) time.

      Takes overall O(n) time
    */
    if (index === this.length) {
      this.push(data);
    } else if (index >= 0 && index < index.length - 1) {
      let newNode = new Node(data);
      let current = this.head;
      let position = index;

      while (position > 1) {
        current = current.next;
        position -= 1;
      }

      let prevNode = current;
      let nextNode = current.next;
      prevNode.next = newNode;
      newNode.next = nextNode;

      this.length += 1;
    } else {
      return false;
    }
  }

  remove(key) {
    /*
      Removes node containing data that matches the key
      Returns the node of null if key doesn't exist
      Takes O(n) times
    */
    let current = this.head;
    let prevNode = null;
    let found = false;

    while (current && !found) {
      if (current.data === key) {
        found = true;
        if (current === this.head) {
          this.head = current.next;
          this.tail = this.head;
        } else {
          prevNode.next = current.next;
        }
      }
      prevNode = current;
      current = current.next;
    }
    this.length -= 1;
    return current;
  }

  removeAtIndex() {}

  nodeAtIndex() {}
}

//let nodeOne = new Node(10);
//console.log(nodeOne.data);

let arr = new SinglyLinkedList();
// console.log("Array is empty?", arr.isEmpty());
// console.log(arr.head);

// arr.push("Hi there");

// console.log("Array is empty?", arr.isEmpty());
// console.log(arr.head);
// console.log(arr.tail);

// arr.push(7);

// console.log("Array is empty?", arr.isEmpty());
// console.log(arr.head);
// console.log(arr.tail);

// arr.push("42");

// console.log("Array is empty?", arr.isEmpty());
// console.log(arr.head);
// console.log(arr.tail);

// console.log("Array length:", arr.length);

// arr.push("lol");

// console.log(arr);

// console.log(arr.search("lol"));

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

arr.remove(2);
console.log(arr);

arr.push(4);
console.log(arr);
