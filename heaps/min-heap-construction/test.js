const solution = require('./solution')

array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]

const heap = new solution.MinHeap(array)
console.log('heap.buildHeap(array)')
console.log(heap.buildHeap(array)) // [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41]
console.log('heap.insert(76)')
heap.insert(76)
console.log(heap.heap) // [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76]
console.log('heap.peek()')
console.log(heap.peek()) // -5
console.log('heap.remove()')
heap.remove()
console.log(heap.heap) // [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24, 48, 41]
console.log('heap.peek()')
console.log(heap.peek()) // 2
console.log('heap.remove()')
heap.remove()
console.log(heap.heap) // [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48]
console.log('heap.peek()')
console.log(heap.peek()) // 6
console.log('heap.insert(87)')
heap.insert(87)
console.log(heap.heap) // [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87]