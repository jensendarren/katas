function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b)

  let totalWaitTime = 0;
  for(let idx = 0; idx < queries.length; idx++) {
    const duration = queries[idx]
    const queriesLeft = queries.length - (idx + 1)
    totalWaitTime += duration * queriesLeft
  }

  return totalWaitTime
}

module.exports = minimumWaitingTime