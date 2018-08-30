// add a second parameter to the callback to support index passing (1).

function reverseArray(array, callback) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(callback(array[i], i));
  }

  return newArray;
}

// This function was created to be used as a callback.
function multiplyByTwo(number) {return number * 2;}  // unfinished...

// Uses reverseArray with the callback, multiplyByTwo.
console.log(reverseArray([1,2,3,4,5], multiplyByTwo));

