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

//https://drive.google.com/file/d/1FfISTMMKt6yMm_1uua-RNaWMd3xJw948/view?fbclid=IwAR39iR1s35csMA9yTbiZP0vE3E0jN-MlpLz-8rE_G6I_5ABJNTVY_qVS1Lg