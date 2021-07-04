const MinMaxStack = require('./solution')

let stack = new MinMaxStack() // instantiate a MinMaxStack

stack.push(5)// : -
console.log(stack.getMin()) //: 5
console.log(stack.getMax()) //: 5
console.log(stack.peek()) //: 5
stack.push(7) //: -
console.log(stack.getMin()) //: 5
console.log(stack.getMax()) //: 7
console.log(stack.peek()) //: 7
stack.push(2) //: -
console.log(stack.getMin()) //: 2
console.log(stack.getMax()) //: 7
console.log(stack.peek()) //: 2
console.log(stack.pop()) //: 2
console.log(stack.pop()) //: 7
console.log(stack.getMin()) //: 5
console.log(stack.getMax()) //: 5
console.log(stack.peek()) //: 5