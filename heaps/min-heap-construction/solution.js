class MinHeap {
	constructor(array) {
		this.heap = this.buildHeap(array);
	}

	// O(n) time / O(1) space
	buildHeap(array) {
		const firstParentIdx = Math.floor((array.length - 2) / 2)
		for(let currentIdx = firstParentIdx; currentIdx >=0; currentIdx--) {
			this.shiftDown(currentIdx, array.length -1, array);
		}
		return array;
	}

	shiftDown(currentIdx, endIdx, heap) {
		let childOneIdx = currentIdx * 2 + 1;
		while(childOneIdx <= endIdx) {
			const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
			let idxToSwap;
			if (childTwoIdx !==-1 && heap[childTwoIdx] < heap[childOneIdx]) {
				idxToSwap = childTwoIdx
			} else {
				idxToSwap = childOneIdx
			}
			if (heap[idxToSwap] < heap[currentIdx]) {
				this.swap(currentIdx, idxToSwap, heap)
				currentIdx = idxToSwap
				childOneIdx = currentIdx * 2 + 1;
			} else {
				return
			}

		}
	}

	shiftUp(currentIdx, heap) {
		let parentIdx = Math.floor((currentIdx - 1) / 2)
		while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
			this.swap(currentIdx, parentIdx, heap)
			currentIdx = parentIdx
			parentIdx = Math.floor((currentIdx -1) / 2)
		}
	}

	peek() {
		return this.heap[0]
	}

	remove() {
		this.swap(0, this.heap.length - 1, this.heap)
		const valueToRemove = this.heap.pop()
		this.shiftDown(0, this.heap.length -1, this.heap)
		return valueToRemove
	}

	insert(value) {
		this.heap.push(value)
		this.shiftUp(this.heap.length -1, this.heap)
	}

	swap(i, j, heap) {
		const temp = heap[j]
		heap[j] = heap[i]
		heap[i] = temp
	}
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
