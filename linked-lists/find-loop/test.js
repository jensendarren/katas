const { LinkedList, findLoop } = require('./solution')

/*
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 0
                           ^         v
                           9 <- 8 <- 7
*/

head = new LinkedList(0)
one = new LinkedList(1)
two = new LinkedList(2)
three = new LinkedList(3)
four = new LinkedList(4)
five = new LinkedList(5)
six = new LinkedList(6)
seven = new LinkedList(7)
eight = new LinkedList(8)
nine = new LinkedList(9)

head.addNode(one);
one.addNode(two);
two.addNode(three);
three.addNode(four);
four.addNode(five);
five.addNode(six);
six.addNode(seven);
seven.addNode(eight);
eight.addNode(nine);
nine.addNode(four);


loop = findLoop(head)

console.log(loop.value) // 4