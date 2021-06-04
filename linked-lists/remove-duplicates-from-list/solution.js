// O(n) time | O(1) space - where n is the number of ndoes in the linked list
// This is because we travers the linked list in place and the function is simple
// becuase the provided linked list is sorted.

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  // keep looping until the current node is null meaning the end of the list
  while (currentNode !== null) {
    // so we look for the next distinct value in the list
    let nextDistinctNode = currentNode.next;
    // and while this is not null (i.e not the end of the list) and the value is not the same
    // (i.e. its not distinct) then we keep looping and updating nextDistinctNode to the next node
    while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
        nextDistinctNode = nextDistinctNode.next;
    }

    // here we update the current nodes next pointer to the next distinct node
    // thereby removeing all the duplicates in between
    currentNode.next = nextDistinctNode;
    // we update the current node to be this new distinct ndoe and continue on
    currentNode = nextDistinctNode;
  }
  return linkedList;
}

module.exports = removeDuplicatesFromLinkedList