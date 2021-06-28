const BST = require('./solution')

/*
Create this BST for the test:
         10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
*/


let bst = new BST(10)
bst.insert(5)
bst.insert(5)
bst.insert(2)
bst.insert(1)
bst.insert(15)
bst.insert(22)
bst.insert(13)
bst.insert(14)

// Testing insert, remove and contains functions:

console.log('insert(12): ', JSON.stringify(bst.insert(12),null,2))

/*
insert(12):   10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /        /  \
     1        12   14
*/

console.log('remove(10): ', JSON.stringify(bst.remove(10), null, 2))

/*
remove(10):    12
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /           \
     1            14
*/

console.log(bst.contains(15)) // true