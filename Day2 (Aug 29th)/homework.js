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
  const endingNumber = prompt("Enter a number:") - 0; // convert n into number
  let i;
  for (i = 0; i < endingNumber; i++) {
    console.log(i);
  }
}

// c.	A sequence of numbers, starting from 3, ending before n, n entered by user
{
  const endingNumber = prompt("Enter a number:") - 0; // alternatively, can use Number() method
  let i = 3;
  for (i; i < endingNumber; i++) {
    console.log(i);
  }
}

// d.	A sequence of numbers, starting from c, ending before n, c and n entered by user
{
  const startingNumber = prompt("Enter a starting number:") - 0;
  const endingNumber = prompt("Enter an ending number:") - 0;
  let i = startingNumber;
  for (i; i < endingNumber; i++) {
    console.log(i);
  }
}

// e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
{
  const startingNumber = prompt("Enter starting number:") - 0;
  const endingNumber = prompt("Enter ending number:") - 0;
  let i = startingNumber;
  const step = 3;
  for (i; i < endingNumber; i += step) {
    console.log(i);
  }
}

// f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
{
  const startingNumber = prompt("Enter starting number:") - 0;
  const endingNumber = prompt("Enter ending number:") - 0;
  const increment = prompt("Enter increment:") - 0;
  let i = startingNumber;
  for (i; i < endingNumber; i += increment) {
    console.log(i);
  }
}

// 4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
{
  const number = prompt("Enter a number:") - 0;
  let i = 1;
  let factorial = i;
  for (i; i <= number; i++) {
    factorial *= i;
  }
}

// 5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
{
  const userAge = prompt("Enter your age:");
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
  const numberX = prompt("Enter a number X:");
  const numberN = prompt("Enter a number N:");
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
  const number = prompt("enter a number:");
  let oddOrEven = number % 2;
  if (oddOrEven != 0) {
    alert(number + " is odd");
  } else {
    alert(number + " is even");
  }
}

//9.
//a.	6 L’s and H’s, half L’s, half H’s (L means low, H means high)
{
  let n = 6;
  let i = 0;
  let x = n / 2;
  for (i; i < x; i++) {
    console.log("L");
  }
  for (x; x < n; x++) {
    console.log("H");
  }
}

//b. n L’s and H’s in total, n entered by user
{
  const n = prompt("Enter total number of L and H:");
  let i = 1;
  let x = n / 2;
  for (i; i < x; i++) {
    console.log("L");
  }
  for (x; x < n; x++) {
    console.log("H");
  }
}

//c.	8 1’s and 0’s in total, consecutively
{
  let number = 8;
  let counter = 0;
  while (counter < number) {
    console.log(0);
    console.log(1);
    counter += 2;
  }
}

//d.  1’s and 0’s in total, consecutively, n entered by user
{
  const number = prompt("enter a number:");
  let counter = 0;
  while (counter < number) {
    console.log(0);
    console.log(1);
    counter += 2;
  }
}

// 10.	Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
{
  const mass = prompt("Enter your mass in kg:");
  const height = prompt("Enter your height in cm:") / 100;
  let bmi = mass / height ** 2;
  if (bmi < 16) {
    alert("Your BMI: " + bmi + ". " + "You're too skinny");
  } else if (bmi >= 16 && bmi < 18.5) {
    alert("Your BMI: " + bmi + ". " + "You're underweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    alert("Your BMI: " + bmi + ". " + "Grats, you're normal");
  } else if (bmi >= 25 && bmi < 30) {
    alert("Your BMI: " + bmi + ". " + "You're fat");
  } else if (bmi >= 30) {
    alert("Your BMI: " + bmi + ". " + "You're obese");
  }
}

//11. Turtle
//a.  Square
{
  let i = 0;
  for (i; i < 4; i++) {
    fd(100);
    rt(90);
  }
}

//b.  Triangle
{
  let i = 0;
  for (i; i < 3; i++) {
    fd(100);
    rt(120);
  }
}

//c.  Pentagon
{
  let i = 0;
  for (i; i < 5; i++) {
    fd(100);
    rt(72);
  }
}

//d. Hexagon
{
  let i = 0;
  for (i; i < 6; i++) {
    fd(100);
    rt(60);
  }
}

//12. Draw a polygon of n sides, n is user defined.
{
  const polygonSides = prompt("Enter number of sides:");
  let i = 0;
  let angle = [(polygonSides - 2) * 180] / polygonSides;
  for (i; i < polygonSides; i++) {
    fd(100);
    rt(180 - angle);
  }
}

//13. Draw n polygon(s), n is user defined
{
  const numberOfPolygon = prompt("Enter number of polygons:");
  let angle = [(polygonSides - 2) * 180] / polygonSides;
  for (let i = 3; i < numberOfPolygon; i++) {
    for (let j = 0; j < i; J++) {
      fd(50);
      rt(180 - angle);
    }
  }
}
