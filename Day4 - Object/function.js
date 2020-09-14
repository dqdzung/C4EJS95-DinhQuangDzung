function renderLorem() {
  console.log(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
}
console.log(
  "------------------------------------------------------------------------------------------------"
);
renderLorem();
console.log("Hello");
renderLorem();
console.log("How are you today?");
renderLorem();
console.log("Have a good day!");
console.log(
  "--------------------------------------------------------------------------------"
);
function sayHelloWorld() {
  console.log("Hello World!");
  console.log("Hello World!");
  console.log("Hello World!");
}
sayHelloWorld();
console.log(
  "--------------------------------------------------------------------------------"
);
let myNumber = [];
const userPrompt = Number(prompt("Add new number:"));
function oddOrEven(aNumber) {
  if (aNumber % 2 !== 0) {
    alert(`${aNumber} is odd`);
  } else {
    alert(`${aNumber} is even`);
  }
}
oddOrEven(userPrompt);
myNumber.push(userPrompt);
console.log(
  "--------------------------------------------------------------------------------"
);
const userNumbers = prompt("Enter numbers, separate by commas:");
function sumOf(anArray) {
  let sum = 0;
  anArray = userNumbers.split(",");
  for (let i = 0; i < anArray.length; i++) {
    sum += Number(anArray[i]);
  }
  return (sum);
}
let sumResult = sumOf(userNumbers);
console.log("Result:",sumResult);

//Ex:
let testString = "$80% percent of $life is to show $up";
function removeDollarSign(string) {
  let newString = string.replace(/\$/g, "");
  return newString;
}
console.log(removeDollarSign(testString));
console.log(
  "--------------------------------------------------------------------------------"
);
