// const person = ["Dzung", 26, "Hanoi", false];
// console.log(person);

// Cupboard analogy
// Cupboard = object, has Box 1 containing salt and Box 2 containing sugar
// Box 1 and box 2 are properties of Cupboard, salt and sugar are values of Box 1 and 2
// Box 1 - salt is a property value pair
// I - Initialize = Buy/Assemble the cupboard
// C - Create = Add a new box to the cupboard
// R - Read = Open a box to see the content
// U - Update = Change the content of a box
// D - Delete = Remove a box

// Object - Init
let person = {
  name: "Dzung",
  age: 26,
};
console.log(person);

//Init exercise
let movie = {
    title: "Tenet",
    year: 2020,
    imdbRating: 8.0,
}
console.log(movie);

// Object - Read
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

//Read exercise
console.log(movie.title);
console.log(movie.year);
console.log(movie.imdbRating);
console.log(movie["title"]);
console.log(movie["year"]);
console.log(movie["imdbRating"]);

let myFav = ["cat", "games", "movies"];
console.log(myFav);
myFav.push("football");
console.log(myFav);
for (let i = 0; i < myFav.length - 1; i++) {
    console.log(myFav[i].toUpperCase());
}

const userInput = prompt("What do you wanna know?");
if (movie[`${userInput}`] === null || movie[`${userInput}`] === undefined) {
alert(`'${userInput}' does not exist in our data!`);
}
else {
    alert(movie[`${userInput}`]);
}