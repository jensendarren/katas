// O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
  // filling with infinity allows us to easily compare the values later
  // so when we are taking the min (later) its easier to comare since this acts as our base case
  // since infinity is going be greater than anything else we compare it to
  const numOfCoins = new Array(n+1).fill(Infinity);
  // initialize that the num of coins to make 0 to 0 to start with
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
          // the new min is going to be the current number for that or the number at the amount less the denom + 1 coin
          numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
      }
    }
  }
  // Since the challenge states we need to return -1 if the amount cannot be built from the available denoms
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

module.exports = minNumberOfCoinsForChange