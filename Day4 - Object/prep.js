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
  rating: 8.0,
};
console.log(movie);

// Object - Read
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

//Read exercise
console.log(movie.title);
console.log(movie.year);
console.log(movie.rating);
console.log(movie["title"]);
console.log(movie["year"]);
console.log(movie["rating"]);

let myFav = ["cat", "games", "movies"];
console.log(myFav);
myFav.push("football");
console.log(myFav);
for (let i = 0; i < myFav.length - 1; i++) {
  console.log(myFav[i].toUpperCase());
}

// const userInput = prompt("What do you wanna know?");
// if (movie[`${userInput}`] === null || movie[`${userInput}`] === undefined) {
// alert(`'${userInput}' does not exist in our data!`);
// }
// else {
//     alert(movie[`${userInput}`]);
// }

//Object - Update
person.name = "Dzung Dinh Quang";
console.log(person);
person["name"] = "Dinh Quang Dzung";
console.log(person);

// Update exercise
movie["rating"] = 8.7;
console.log(movie);
movie["rating"] += 0.5;
console.log(movie);

// Object - Create
person.location = "Hanoi";
console.log(person);
person["status"] = "single";
console.log(person);

// Create exercise
// const userInput = prompt("What do you wanna know?");
// if (movie[`${userInput}`] === null || movie[`${userInput}`] === undefined) {
// alert(`'${userInput}' does not exist in our data, OK to add new.`);
// movie[`${userInput}`] = prompt("Add data for new item");
// }
// else {
//     alert(movie[`${userInput}`]);
// }
// console.log(movie);

// Object - Delete
delete person.status;
console.log(person);
delete person[`location`];
console.log(person);

// Array of Objects exercise
let moviesArr = [
  { title: "Godfather", year: 1972, rating: 9.2 },
  { title: "Dark Knight", year: 2008, rating: 9.0 },
  { title: "LOTR", year: 2003, rating: 8.9 },
];
for (let i = 0; i < moviesArr.length; i++) {
  // console.log(moviesArr[i].title);
  // console.log(`Year: ${moviesArr[i].year}`);
  // console.log(`Rating: ${moviesArr[i].rating}`);
  // console.log("------------------")
  for (const property in moviesArr[i]) {
    console.log(`${property}: ${moviesArr[i][property]}`);
  }
  console.log("------------------");
}

moviesArr[moviesArr.length - 1].rating += 0.7;
console.log(moviesArr[moviesArr.length - 1]);

//Object containing Arrays exercise
let myMovie = {
  title: "Tenet",
  year: 2020,
  rating: 8.0,
  characters: ["Protag", "Kat", "Neil"],
};
console.log(myMovie);
// for (const property in myMovie) {
//   console.log(`${property}: ${myMovie[property]}`);
// }

for (let i = 0; ; i++) {
  console.log(`Title: ${myMovie.title}`);
  console.log(`Year: ${myMovie.year}`);
  console.log(`Casts: ${myMovie.characters}`);
  break;
}
myMovie.characters.push("Sator");

//Optional exercise
{
  const moviesResult = [
    {
      popularity: 512.119,
      vote_count: 460,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      id: 475557,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
      original_language: "en",
      original_title: "Joker",
      genres: [80, 18, 53],
      title: "Joker",
      vote_average: 8.8,
      overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      release_date: "2019-10-04",
    },
    {
      popularity: 241.402,
      vote_count: 598,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
      id: 429203,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
      original_language: "en",
      original_title: "The Old Man & the Gun",
      genres: [35, 80, 18],
      title: "The Old Man & the Gun",
      vote_average: 6.3,
      overview:
        "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
      release_date: "2018-09-28",
    },
    {
      popularity: 233.735,
      vote_count: 4139,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      id: 429617,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      original_language: "en",
      original_title: "Spider-Man: Far from Home",
      genres: [28, 12, 878],
      title: "Spider-Man: Far from Home",
      vote_average: 7.6,
      overview:
        "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      release_date: "2019-07-02",
    },
    {
      popularity: 158.333,
      vote_count: 323,
      video: false,
      poster_path:
        "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
      id: 522938,
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
      original_language: "en",
      original_title: "Rambo: Last Blood",
      genres: [28, 53],
      title: "Rambo: Last Blood",
      vote_average: 6.1,
      overview:
        "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
      release_date: "2019-09-20",
    },
  ];

  // console.log(`Numbers of movies: ${moviesResult.length}`);
  // console.log(moviesResult[0]);
  // console.log(`Title: ${moviesResult[0].title}`);
  // console.log(`Vote average: ${moviesResult[0].vote_average}`);
  // console.log(`Genre: ${moviesResult[0].genres}`);

  for (let i = 0; i < moviesResult.length; i++) {
    console.log(`Title: ${moviesResult[i].title}`);
    console.log(`Vote average: ${moviesResult[i].vote_average}`);
    console.log(`Genre: ${moviesResult[i].genres}`);
    console.log("---------------------------");
  }

  const userGenre = Number(prompt("Enter a genre you like:"));
  for (let i = 0; i < moviesResult.length; i++) {
    for (let j = 0; j < moviesResult[i].genres.length; j++) {
      if (userGenre === moviesResult[i].genres[j]) {
        console.log(moviesResult[i].title);
      }
    }
  }

  const userMinRate = Number(prompt("Enter a min rate:"));
  for (let i = 0; i < moviesResult.length; i++) {
    if (userMinRate < moviesResult[i].vote_average) {
      console.log(moviesResult[i].title);
    }
  }
}
