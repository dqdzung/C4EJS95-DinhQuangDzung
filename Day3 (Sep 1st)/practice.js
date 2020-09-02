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

//Update all items to uppercase/lower case letters
{
  let foodMenu = ["Rice", "Beef", "Pork", "Vegs", "Fish"];
  console.log(`Before: ${foodMenu}`);
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i] = foodMenu[i].toLowerCase();
  }
  console.log(`Lowercase: ${foodMenu}`);
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i] = foodMenu[i].toUpperCase();
  }
  console.log(`Uppercase: ${foodMenu}`);
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
  //with for loop
  for (i = 0; i < movies.length; i++) {
    if (i === moviePosition) {
      movies[i] = movieTitle;
    }
  }
  console.log(`After: ${movies}`);
}

//Delete item at user-defined position
{
  let movies = ["Memento", "Inception", "Dark Knight", "Dunkirk", "Tenet"];
  console.log(`Before: ${movies}`);
  const moviePosition = Number(prompt(`Enter position:`));
  for (let i = 0; i < movies.length; i++) {
    if (i === moviePosition) {
      movies.splice(moviePosition, 1);
    }
  }
  console.log(`After: ${movies}`);
}

//Delete user-defined number of items from user-defined position
{
  let movies = ["Memento", "Inception", "Dark Knight", "Dunkirk", "Tenet"];
  console.log(`Before: ${movies}`);
  const moviePosition = Number(prompt(`Enter position:`));
  const deleteLength = Number(prompt(`Enter number of movies to remove:`));
  let i = 0;
  do {
    if (i === moviePosition) {
      movies.splice(moviePosition, deleteLength);
    }
    i++;
  } while (i < movies.length);
  console.log(`After: ${movies}`);
}

//Write a script asking users their username, if the entered username is too long (>15 characters), inform and ask them to re-enter,
//if the username is short enough (<=15 characters), tell them it is good.
{
  let userName = prompt(`Please enter a username:`);
  while (true) {
    if (userName.length > 0 && userName.length > 15) {
      alert(`Username is too long. Maximum 15 characters`);
      userName = prompt(`Please re-enter username:`);
    } else {
      alert(`Your username is ${userName}. Good one`);
      break;
    }
  }
}

//Write a script to show user a quiz with 4 choices
//Then ask user to answer, if they enter an invalid choice, tell them it is invalid and ask them to enter their choice again (Invalid choice, the answer must be 1, 2, 3 or 4)
//If the choice is valid, check the result, if incorrect: Good luck next time, if correct: Bravo, you are correct.
{
  let userAnswer = Number(
    prompt(
      `What is the shape of the Earth?
  1. Round
  2. Flat
  3. Cube
  4. Pyramid`
    )
  );
  while (true) {
    if (!userAnswer) {
      userAnswer = Number(prompt(`Invalid answer. Please enter a number:`));
    } else {
      break;
    }
  }
  if (userAnswer === 1) {
    alert(`Grats! You're smart.`);
  } else {
    alert(`Please go back to school and educate yourself`);
  }
}
