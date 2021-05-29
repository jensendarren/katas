function twoNumberSum(array, targetSum) {
  // you can think of the hashMap as a store of the second value that we are looking for
	lookingFor = {}
	for(let e of array) {
		if(lookingFor[e]) {
      // because the lookingFor contains the value e already it means that the
      // this value, e, combined wiht the
			return [e, targetSum-e]
		} else {
      // add the targetSum less the current value to the hash map
      // so that on subsequent iterations if this value is then found
      // then it means we can return it.
			lookingFor[targetSum-e] = true
		}
	}
	return []
}

// imagine array = [3,2] & target = 5
// 1st loop e == 3 : false => hashMap[5-3] = hashMap[2] = true
// 2nd loop e == 2 : true => return[2,3] DONE!

module.exports = twoNumberSum