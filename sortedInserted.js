const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function printDoublyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(llist, data) {
  // Edge cases:
  //If llist is none -> return new node
  //if llist node is larger than new node -> new node is llist, llist poings to next
  //new = llist, llist = next, return new node
  //If new node is larger than tail -> check if current is greater than new

  //traverse the linked list
  let newNode = new DoublyLinkedListNode(data);
  if (llist === null) return newNode;
  if (newNode.data < llist.data) {
    llist.prev = newNode;
    newNode.next = llist;
    return newNode;
  }
  let current = llist;
  while (current.next !== null) {
    current = current.next;
    //check if current node is greater than new node
    if (current.data > newNode.data) {
      //insert before
      newNode.next = current;
      newNode.prev = current.prev;
      //move to next code
      current.prev.next = newNode;
      current.prev = newNode;
      return llist;
    }
  }
  //insert at the end
  current.next = newNode;
  newNode.prev = current;
  return llist;
}
