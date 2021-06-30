const { Node, DoublyLinkedList} = require('./solution')

one = new Node(1)
two = new Node(2)
three = new Node(3)
four = new Node(4)
five = new Node(5)

ll = new DoublyLinkedList()

ll.setTail(one)
ll.setTail(two)
ll.setTail(three)
ll.setTail(four)
ll.setTail(five)

console.log('1 <-> 2 <-> 3 <-> 4 <-> 5', ll.traverseNodes())

ll.setHead(four)
console.log('4 <-> 1 <-> 2 <-> 3 <-> 5', ll.traverseNodes())

six = new Node(6)
ll.setTail(six)
console.log('4 <-> 1 <-> 2 <-> 3 <-> 5 <-> 6', ll.traverseNodes())

ll.insertBefore(six, three)
console.log('4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6', ll.traverseNodes())

ll.insertAfter(six, three)
console.log('4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3', ll.traverseNodes())

position = 1
newThree = new Node(3)
ll.insertAtPosition(position, newThree)
console.log('3 <-> 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3', ll.traverseNodes())

ll.removeNodesWithValue(3)
console.log('4 <-> 1 <-> 2 <-> 5 <-> 6', ll.traverseNodes())

ll.remove(two)
console.log('4 <-> 1 <-> 5 <-> 6 ', ll.traverseNodes())

console.log(ll.containsNodeWithValue(5)) // true