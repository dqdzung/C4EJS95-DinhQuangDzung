// a();
// function a() {
//   return 1;
// } // -> run

// b();
// const b = function () {
//   return 2;
// } // -> doens't run

const arr = [1, 2, 3, 11, 4, 5, 6, 7];

function test(array, callback) {
    console.log("test:");
    return callback(array);
}

function evenNum(array) {
  let evenArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    }
  }
  return evenArr;
}
console.log(test(arr,evenNum));

arrMax = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
console.log("Max: ", arrMax(arr));
