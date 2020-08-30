// Question 1
// Name must contain only letters, digits, or the symbol "$" and "_"
// Name must not start with a digit
// Name must not be a reserved word

// Examples of invalid names:
// let 1myName;
// let my-name;
// let let;

// To check the data type of a variable, use the "typeof" operator

// Question 2
// 1 – b, 2 – a, 3 – e, 4 – c

//Question 3
let message = "Coding is great";
console.log(message);
let studentCount = 0;
console.log(studentCount);

//Question 4
message = "Coding might not be easy, but still great";
console.log(message);
studentCount = 16;
console.log(studentCount);
message = "coding might not be easy, but still great";
console.log(message);
studentCount += 1;
console.log(studentCount);

//Question 5
alert("Hey there gorgeous!");

//Question 6
let userName = prompt("Your name please?");
alert("Hi, " + userName + "!");

//Question 7
let userFirstName = prompt("Your first name here:");
let userLastName = prompt("Now your last name please:");
alert("Hello there, " + userFirstName + userLastName + "!");

//Question 8
let squareSideLength = prompt("Please enter the side length of the square");
let squareArea = squareSideLength * squareSideLength;
alert("The area of the square is: " + squareArea);

//Question 9
let circleRadius = prompt("Please enter the radius of the circle");
let circleArea = circleRadius * circleRadius * 3.14;
alert("The area of the circle is: " + circleArea);

//Question 10
let tempC = prompt("Enter the temperature in Celsius");
let tempF = (tempC * 9/5) + 32;
alert(tempC + " (C)" + "=" + tempF + " (F)");

//end
