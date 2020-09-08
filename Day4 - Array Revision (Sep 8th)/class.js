const myArray = [5, 6, 8, 9, 10, 2, 3, 1, 4, 7];
console.log(`Before ${myArray}`);
{
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      if (myArray[j] > myArray[j + 1]) {
        let temp = myArray[j];
        myArray[j] = myArray[j + 1];
        myArray[j + 1] = temp;
      }
    }
  }
  console.log(`After ${myArray}`);
}

