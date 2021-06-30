class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			return;
		}
		this.insertBefore(this.head, node);
  }

  setTail(node) {
		if (this.tail === null) {
			this.setHead(node);
			return;
		}
		this.insertAfter(this.tail, node);
  }

  insertBefore(node, newNode) {
		if (newNode === this.head && newNode === this.tail) return;
		this.remove(newNode);
		newNode.next = node;
		newNode.prev = node.prev;
		if (node === this.head) {
			this.head = newNode;
		} else {
			node.prev.next = newNode;
		}
		node.prev = newNode;
  }

  insertAfter(node, newNode) {
		if (newNode === this.head && newNode === this.tail) return;
		this.remove(newNode);
    	newNode.prev = node;
		newNode.next = node.next;
		if (node === this.tail) {
			this.tail = newNode;
		} else {
			node.next.prev = newNode;
		}
		node.next = newNode;
  }

  insertAtPosition(position, newNode) {
		if (position === 1) {
			this.setHead(newNode);
			return;
		}
		let index = 1;
		let node = this.head;
		while (node !== null && index++ !== position) node = node.next;
		if (node !== null) {
			this.insertBefore(node, newNode);
		} else {
			this.setTail(newNode)
		}
  }

  removeNodesWithValue(value) {
    let node = this.head;
		while (node !== null) {
			const nodeToRemove = node;
			node = node.next;
			if (nodeToRemove.value === value) this.remove(nodeToRemove);
		}
  }

  remove(node) {
		if (node === this.head) this.head = node.next;
		if (node === this.tail) this.tail = node.prev;
		if (node.next !== null) node.next.prev = node.prev;
		if (node.prev !== null) node.prev.next = node.next;
		node.prev = null;
		node.next = null;
  }

  traverseNodes() {
	let node = this.head;
	while (node !== null) {
		console.log(node.value)
		node = node.next
	};
  }

  containsNodeWithValue(value) {
		let node = this.head;
		while (node !== null && node.value !== value) {node = node.next};
		return node !== null;
  }
}


module.exports = {
	Node,
	DoublyLinkedList
}