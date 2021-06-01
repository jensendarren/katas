// O(n) time | O(d) space - where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of *special* arrays in the array

function productSum(array, multiplier=1) {
  let sum = 0;
  for(const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1)
    } else {
      sum += element
    }
  }
  return sum * multiplier;
}

module.exports = productSum