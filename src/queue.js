const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newElement = new ListNode(value);
    if(!this.head) {
      this.head = newElement;
      this.tail = newElement;
    } else {
      this.tail.next = newElement;
      this.tail = newElement;
    }
  }

  dequeue() {
    let currentHead = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    return currentHead.value;
  }
}

module.exports = {
  Queue
};
