class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
    addNode(node) {
        this.next = node;
    }
}

// O(n) time | O(1) space
// solution traverses over each item using two pointers
function findLoop(head) {
    // skip the first node
    let first = head.next;
    let second = head.next.next;

    while(first!==second) {
        first = first.next;
        // second pointer always skips a node
        second = second.next.next;
    }
    // reset the first pointer to the head
    first = head;
    while(first !== second) {
        first = first.next;
        // now the second pointer moves at the same pace as the first
        second = second.next;
    }
    return first;
}

module.exports = {
    LinkedList,
    findLoop
}