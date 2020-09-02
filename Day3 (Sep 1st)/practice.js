//Update all items in array with user inputs
{
  let foodMenu = ["food 1", "food 2", "food 3", "food 4", "food 5"];
  console.log(foodMenu);
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i] = prompt(`Enter new item:`);
  }
  console.log(foodMenu);
}

//Update all items in array with another list
{
  let foodMenu = ["food 1", "food 2", "food 3", "food 4", "food 5"];
  console.log(`Before: ${foodMenu}`);
  let newItem = ["Rice", "Beef", "Pork", "Vegs", "Fish"];
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i] = newItem[i];
  }
  console.log(`After: ${foodMenu}`);
}

//Update first item in array with user input
{
  let movies = ["Memento", "Inception", "Dark Knight", "Dunkirk", "Tenet"];
  console.log(`Before: ${movies}`);
  const movieTitle = prompt(`Enter a new movie:`);
  movies[0] = movieTitle;
  console.log(`After: ${movies}`);
}

//Update array with new user-defined item at user-defined position
//with do...while loop
{
  let movies = ["Memento", "Inception", "Dark Knight", "Dunkirk", "Tenet"];
  let i = 0;
  console.log(`Before: ${movies}`);
  const movieTitle = prompt(`Enter a new movie:`);
  const moviePosition = Number(prompt(`Enter position:`));
  do {
    if (i === moviePosition) {
      movies[i] = movieTitle;
    }
    i++;
  } while (i < movies.length);
  console.log(`After: ${movies}`);
}
//with for loop
let movies = ["Memento", "Inception", "Dark Knight", "Dunkirk", "Tenet"];
let i;
console.log(`Before: ${movies}`);
const movieTitle = prompt(`Enter a new movie:`);
const moviePosition = Number(prompt(`Enter position:`));
for (i = 0; i < movies.length; i++) {
  if (i === moviePosition) {
    movies[i] = movieTitle;
  }
}
console.log(`After: ${movies}`);

