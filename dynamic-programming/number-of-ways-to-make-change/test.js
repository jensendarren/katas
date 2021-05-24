const numberOfWaysToMakeChange = require('./solution')

n = 6
denoms = [1, 5]

const ways = numberOfWaysToMakeChange(n, denoms)

console.log(ways)