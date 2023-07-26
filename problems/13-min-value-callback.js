/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.


write a for loop
if cb === undefined return smallest value
if cb === defined return smallest value passed through callback

*******************************************************************************/

function minValueCallback(array, cb) {
  let smalVal = array[0];
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    //console.log(ele)
    if (ele < smalVal) {
      smalVal = ele
    }
  } if (cb === undefined) {
    return smalVal
  }
  return cb(smalVal)
}
Examples:
console.log(minValueCallback([64, 25, 49, 73838, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch (e) {
  return null;
}
