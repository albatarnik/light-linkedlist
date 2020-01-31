class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head.next;
    let prevNode = this.head;
    while (node) {
      if (!node.next) {
        prevNode.next = null;
        return;
      }

      prevNode = node;
      node = node.next;
    }
  }
  insertLast(data) {
    const newNode = new Node(data);
    let lastNode = this.getLast();
    if (lastNode) lastNode.next = newNode;
    else this.head = newNode;
  }
  getAt(n) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (n === i) {
        return node;
      }
      i++;
      node = node.next;
    }
    return null;
  }
  removeAt(n) {
    if (!this.head) return;

    if (n === 0) {
      this.removeFirst();
      return;
    }
    let prevNode = this.getAt(n - 1);
    if (!prevNode || !prevNode.next) return;
    prevNode.next = prevNode.next.next;
  }
  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    let newNode = new Node(data);
    let prevNode = this.getAt(index - 1);
    if (!prevNode) {
      this.insertLast(data);
      return;
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let i = 0;
    while (node) {
      fn(node, i);
      node = node.next;
      i++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
