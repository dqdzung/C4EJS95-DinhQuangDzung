//Exercise 1
let number = prompt("enter a number:");
let sum = 0;
for (let i = 0; i < number; i++) {
  sum += i;
}
alert(sum);

//Exercise 2
let number = prompt("enter a number:");
let oddOrEven = number % 2;
if (oddOrEven != 0) {
  alert("Odd");
} else {
  alert("Even");
}

let number = prompt("enter a number:");
let oddOrEven = number % 2;
if (oddOrEven = 0) {
  alert("Even");
} else {
  alert("Odd");
}

//Exercise 3
let userName = prompt("enter a name");
if (userName = "") {
}
let userPassword = prompt("enter a password");
for (userPassword = ""; userPassword.length < 6; userPassword.length > 20) {
  userPassword = prompt("enter password again");
}
alert("success");
