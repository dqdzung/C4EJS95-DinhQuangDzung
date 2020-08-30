// 1.	let vs var vs const
// What are var and const in JavaScript?
// var and const are used to declare variables in JS.

// What are the differences between let and var?
//The difference between let and var is their scope. Variables declared with both var and let can be reassigned.
//var can have global and function scope, but not block scope.
//let can have block and function scope, but not global scope.

// What are the differences between let and const?
//The difference between let and const is assignability. Variables declared with const cannot be reassigned, while those declared with let can be reassigned.

// What to use in what cases?
//Use let when you want to change the value of the variables. Use const when you know for sure the variables are unchanged.

//2.	Boolean
//Boolean are variables that only have a value of true or false.
//Boolean, conditionals, comparisons, operations of Booleans will yield a Boolean

// 3.	Write a program to print out
// a.	7 numbers, starting from 0 (no user input)
// {
//   let i;
//   for (i = 0; i < 7; i++) {
//     console.log(i);
//   }
// }

// // b.	n numbers, starting from 0, n entered by user
// {
//   let n = prompt("Enter a number:") - 0;
//   let i;
//   for (i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// // // c.	A sequence of numbers, starting from 3, ending before n, n entered by user
// {
//   let n = prompt("Enter a number:") - 0;
//   let i;
//   for (i = 3; i < n; i++) {
//     console.log(i);
//   }
// }

// d.	A sequence of numbers, starting from c, ending before n, c and n entered by user
{
  let c = prompt("Enter a starting number:") - 0;
  let n = prompt("Enter an ending number:") - 0;
  for (c; c < n; c++) {
    console.log(c);
  }
}

// // e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// {
{
  let c = prompt("Enter starting number:") - 0;
  let n = prompt("Enter ending number:") - 0;
  for (c; c < n; c += 3) {
    console.log(c);
  }
}
