// 1. Variable swapping
let a = 13;
let b = 42;
console.log(a, b); // Log: 13 42
// Swapping example 1:
[a, b] = [b, a]; // Array [a,b] assigned the value of [42,13]
console.log(a, b); // Log: 42 13
// Swapping example 2:
let temp;
temp = a; // temp assigned value of a: 42
a = b; // a assigned value of b: 13
b = temp; // b assigned value of temp: 42
console.log(a, b); // Log: 13 42

// 2. Split String into Array
const myString = `Hello there beautiful`;
let res = myString.split(" "); // Split the string using space as the separator
console.log(res); // Log: ["Hello", "there", "beautiful"]

// 3.
const array = [4, 5, 7, -8];
console.log(...array);

// 4. Welcome to our shop, what do you want (C, R, U, D)?
let shopItems = [`T-Shirt`, `Sweater`, `Socks`];
let shopGreeting = `Welcome to our shop, what do you want? C, R, U, D, Quit`;
while (true) {
  const userActions = prompt(shopGreeting);
  if (userActions !== "Quit" && userActions !== "quit") {
    switch (userActions) {
      case `C`:
      case `c`:
        const addNewItem = prompt(`Enter new item:`);
        shopItems.push(addNewItem);
        break;
      case `U`:
      case `u`:
        const updatePosition = Number(prompt(`Update position?`) - 1);
        const updateItem = prompt(`New item?`);
        shopItems[updatePosition] = updateItem;
        break;
      case `D`:
      case `d`:
        const deletePosition = Number(prompt(`Delete position?`));
        let j = deletePosition - 1;
        shopItems.splice(j, 1);
        break;
      case `R`:
      case `r`:
      default:
        break;
    }
    alert(`Our items: ${shopItems}`);
  } else {
    break;
  }
}

// 5. Write a script to ask users enter a sequence of numbers, separated by commas, calculate the sum of the numbers and show it
{
  const userSequence = prompt(
    `Enter a sequence of number, separate by comma (,):`
  );
  let toArray = userSequence.split(",");
  let sum = 0;
  for (let i = 0; i < toArray.length; i++) {
    sum += Number(toArray[i]);
  }
  alert(sum);
}

// 6. Write a script asking users to enter a sequence of numbers, separated by commas, find the smallest number and log it out
{
  const userSequence = prompt(
    `Enter a sequence of number, separate by comma (,):`
  );
  let toArray = userSequence.split(",");
  let min = toArray[0];
  for (let i = 0; i < toArray.length; i++) {
    if (toArray[i] < min) {
      min = toArray[i];
    }
  }
  alert(`The smallest number in your sequence is: ${min}`);
}

// 7. Create an array containing at least 5 numbers, then ask user to enter a number, perform a search to look for the number in the array,
// if found, inform user the index of it in the array, if not, inform there's not.

//                                                            WRONG!!!!
//   const myArray = [3, 4, 6, -9, 10, -88, 2];
//   const userNumber = Number(prompt(`Enter a number to search for:`));
//   let i = 0;
//   do {
//     if (myArray[i] === userNumber) {
//       alert(`Your number ${userNumber} is FOUND in the array at index ${i}.`);
//     } else {
//       alert(`Your number ${userNumber} is NOT in the array!`);
//     }
//     i++;
//     break;
//   } while (i < myArray.length);
//                                                            WRONG!!!!

{
  const myArray = [3, 4, 6, -9, 10, -88, 2];
  const userNumber = Number(prompt(`Enter a number to search for:`));
  let i = 0;
  let found;
  for (i; i < myArray.length; i++) {
    if (myArray[i] === userNumber) {
      found = true;
      alert(`Found number ${userNumber} in array at index ${i}!`);
      break;
    }
  }
  if (!found) {
    alert(`Number ${userNumber} not found in array!`);
  }
}

// 8. You own a flock of sheep of various sizes.
{
  let myFlock = [6, 13, 200, 66, 24, 42, 99];
  console.log(`Hello, I'm D and these are my sheep:`);
  console.log(...myFlock);
  let month = 0;
  do {
    let biggestSheep = Math.max(...myFlock); // Find the biggest to shear
    console.log(
      `The biggest one in my flock is ${biggestSheep}. Let's shave it!`
    );
    myFlock[myFlock.indexOf(biggestSheep)] = 8; // Shaved sheep returns to original size of 8
    console.log(`After shearing:`);
    console.log(...myFlock);
    month++;
    for (let i = 0; i < myFlock.length; i++) {
      myFlock[i] += 50; // Sheep's sizes increase by 50 each month
    }
    console.log("");
    console.log(`MONTH ${month}`);
    console.log(`A month has passed, the sheep grew:`);
    console.log(...myFlock);
  } while (month < 5);
  let sum = 0;
  for (let j = 0; j < myFlock.length; j++) {
    sum += Number(myFlock[j]); // Calculate flock's total size
  }
  let money = sum * 2;
  console.log(`My flock's total size is: ${sum}`); // Calculate money
  console.log(`I would get: $${money} for selling`);
}

// 9. Turtle JS. Draw the shape
{
  const penColors = [`red`, `gray`, `blue`, `purple`, `cyan`];
  let strokeSize = 25;
  let i = 1;
  let times = 0;
  do {
    color(penColors[i]);
    for (let j = 0; j < 4; j++) {
      fd(strokeSize);
      rt(90);
    }
    strokeSize += 25;
    times++;
    i++;
  } while (times < 4);
}

// 10. Enter a sequence of names, separated by commas. Create new array containing the names, each surrounded with <>
{
  const userSequence = prompt(
    `Enter a sequence of name, separate by comma (,):`
  );
  let toArray = userSequence.split(",");
  let newArray = [];
  for (let i = 0; i < toArray.length; i++) {
    toArray[i] = `<${toArray[i]}>`;
    newArray.push(toArray[i]);
  }
  alert(`${toArray} => ${newArray}`);
}

//11. Enter a sequence of numbers, separated by commas. Create a new array containing odd numbers.
{
  const userSequence = prompt(
    `Enter a sequence of number, separate by comma (,):`
  );
  let toArray = userSequence.split(",");
  let newArray = [];
  for (let i = 0; i < toArray.length; i++) {
    if (toArray[i] % 2 !== 0) {
      newArray.push(toArray[i]);
    }
  }
  alert(`${toArray} => ${newArray}`);
}

// Remember to learn array map and array filter functions.
