class MinMaxStack {
    constructor() {
        this.stack = []
        this.minMaxStack = []
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    pop() {
        this.minMaxStack.pop();
        return this.stack.pop();
    }

    push(number) {
        let minMax = {min: number, max: number}
        if (this.minMaxStack.length) {
            // is number a new max?
            let currentMinMax = this.minMaxStack[this.minMaxStack.length - 1]
            // is number a new max?
            minMax.max = Math.max(number, currentMinMax.max);
            // is number a new min?
            minMax.min = Math.min(number, currentMinMax.min);
        }
        this.minMaxStack.push(minMax);
        this.stack.push(number);
    }

    // O(1) time | O(1) space
    getMin() {
        return this.minMaxStack[this.minMaxStack.length - 1].min;
    }

    // O(1) time | O(1) space
    getMax() {
        return this.minMaxStack[this.minMaxStack.length - 1].max;
    }
}

module.exports = MinMaxStack