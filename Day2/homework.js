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
{
  let i;
  for (i = 0; i < 7; i++) {
    console.log(i);
  }
}

// b.	n numbers, starting from 0, n entered by user
{
  let n = prompt("Enter a number:") - 0; // convert n into number
  let i;
  for (i = 0; i < n; i++) {
    console.log(i);
  }
}

// c.	A sequence of numbers, starting from 3, ending before n, n entered by user
{
  let n = prompt("Enter a number:") - 0;
  let i = 3;
  for (i; i < n; i++) {
    console.log(i);
  }
}

// d.	A sequence of numbers, starting from c, ending before n, c and n entered by user
{
  let c = prompt("Enter a starting number:") - 0;
  let n = prompt("Enter an ending number:") - 0;
  for (c; c < n; c++) {
    console.log(c);
  }
}

// e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
{
  let c = prompt("Enter starting number:") - 0;
  let n = prompt("Enter ending number:") - 0;
  let s = 3;
  for (c; c < n; c += s) {
    console.log(c);
  }
}

// f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
{
  let c = prompt("Enter starting number:") - 0;
  let n = prompt("Enter ending number:") - 0;
  let s = prompt("Enter increment:") - 0;
  for (c; c < n; c += s) {
    console.log(c);
  }
}

// 4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
{
  let number = prompt("Enter a number:") - 0;
  let i = 1;
  let factorial = i;
  for (i; i <= number; i++) {
    factorial *= i;
  }
}

// 5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
{
  let userAge = prompt("Enter your age:");
  if (userAge < 14) {
    alert("You're not old enough to view this content");
  } else {
    alert("Enjoy");
  }
}
// 6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
{
  let number = prompt("Enter a number:");
  for (number < 0; number > 9; ) {
    number = prompt("Enter number from 0-9:");
  }
  if (number == 4.5) {
    alert("Half of 9");
  } else if (number < 4.5) {
    alert("Lower half of 9");
  } else if (number > 4.5) {
    alert("Higher half of 9");
  }
}

// 7.	Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
{
  let numberX = prompt("Enter a number X:");
  let numberN = prompt("Enter a number N:");
  if (numberX == numberN / 2) {
    alert(numberX + " is half of " + numberN);
  } else if (numberX < numberN / 2) {
    alert(numberX + " is in lower half of " + numberN);
  } else if (numberX > numberN / 2) {
    alert(numberX + " is in higher half of " + numberN);
  }
}

// 8.	Write a script to check if a number is even (divisible by 2) or odd number
{
  let number = prompt("enter a number:");
  let oddOrEven = number % 2;
  if (oddOrEven != 0) {
    alert(number + " is odd");
  } else {
    alert(number + " is even");
  }
}

// 10.	Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
