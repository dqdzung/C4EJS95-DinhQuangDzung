// Lab
// Part 1:
const quizzes = [
  {
    question: "What is the color of Donald Duck’s bow tie?",
    choice: ["Red", "Yellow", "Blue", "White"],
    correct: 1,
  },
  {
    question: "Which animal does not appear in the Chinese zodiac?",
    choice: ["Dragon", "Rabbit", "Dog", "Bird"],
    correct: 4,
  },
  {
    question: "Fe is the chemical symbol for…?",
    choice: ["Zinc", "Hydrogen", "Iron", "Fluorine"],
    correct: 3,
  },
  {
    question: "How many hearts does an octopus have?",
    choice: ["4", "3", "2", "1"],
    correct: 1,
  },
  {
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    choice: ["Sword", "Pen", "Key", "Cellphone"],
    correct: 3,
  },
  {
    question: "How would one say goodbye in Spanish?",
    choice: ["Adios", "Hola", "Au Revoir", "Salir"],
    correct: 1,
  },
  {
    question: "What is the largest organ of the human body?",
    choice: ["Heart", "Skin", "large Intestine", "Liver"],
    correct: 2,
  },
  {
    question: "On a dartboard, what number is directly opposite No. 1?",
    choice: ["20", "12", "15", "19"],
    correct: 4,
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    choice: ["Single", "Secure", "Subscriber", "Solid"],
    correct: 3,
  },
  {
    question: "What geometric shape is generally used for stop signs?",
    choice: ["Hexagon", "Circle", "Triangle", "Octagon"],
    correct: 4,
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    choice: [
      "George Washington",
      "Benjamin Franklin",
      "Abraham Lincoln",
      "Thomas Jefferson",
    ],
    correct: 2,
  },
  {
    question: "Which restaurant's mascot is a clown?",
    choice: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
    correct: 1,
  },
];
let toAsk = quizzes, // Copy "quizzes" to another array called "toAsk"
  quizStart = confirm(
    `Welcome to the quiz!\nThere are ${toAsk.length} questions.\nPlease answer with a NUMBER, invalid inputs count as WRONG!\nHit "OK" to start or "Cancel" to quit.\nNOTE: Once started, you won't be able to quit until you finished all 12!`
  ),
  userScore = 0;
if (quizStart === true) {
  // "confirm" input returns true/false when user clicks OK/Cancel. Quiz only starts with "OK".
  function randomIndex() {
    return Math.floor(Math.random() * toAsk.length);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // from i to 1 ("i" here is last index of the array)
      let j = Math.floor(Math.random() * (i + 1)); // randomize j from 0 to i
      // Swap array[i] and array[j]
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  while (true) {
    // Loop, every iteration, a random question is picked, asked and then deleted, until none remains
    if (toAsk.length > 0) {
      // Check if there are questions remain
      let questionIndex = randomIndex(), // Get a random question index
        userQuestion = toAsk[questionIndex],
        { question, choice, correct } = userQuestion,
        choiceList = "",
        correctAns = choice[correct - 1]; // Store correct answer to compare later
      shuffleArray(choice); // Shuffle the choices
      console.log("Question was asked"); // For testing purposes, user doesn't see this
      for (let i = 0; i < choice.length; i++) {
        choiceList += `\n${i + 1}. ${choice[i]}`; // Display choices in a nice format
      }
      const userAnswer = Number(prompt(`${question} ${choiceList}`));
      if (choice[userAnswer - 1] === correctAns) {
        alert("Grats. You're right!");
        userScore++;
      } else {
        alert(`Better luck next time. Correct answer was "${correctAns}".`);
      }
      toAsk.splice(questionIndex, 1); // Delete the question after, so it only appears once.
    } else {
      // All questions are asked -> no question left, break the loop
      alert(`That's all! You scored ${userScore}/12!`);
      break;
    }
  }
}

// Part 2:
const jobData =
  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
// Replace link with the its content to run the codes below this line

console.log("Job hits:", jobData.hits); // (2)
console.log(jobData.hits[0]); // (3)
let { jobTitle, benefits } = jobData.hits[0];
console.log(`First job title:\n${jobTitle}`); // (4)
console.log(benefits); // (5)
console.log("First job benefits:");
for (let i = 0; i < benefits.length; i++) {
  let { benefitValue } = benefits[i];
  console.log("-", benefitValue); // (6)
}
for (let i = 0; i < jobData.hits.length; i++) { // (7)
  let { jobTitle, benefits } = jobData.hits[i];
  console.log(jobTitle);
  console.log("Benefits:");
  for (let j = 0; j < benefits.length; j++) {
    let { benefitValue } = benefits[j];
    console.log("-", benefitValue);
  }
  console.log("------------------------------------------------------------");
}
for (let i = 0; i < length; i++) { // (8)
  let { jobTitle, locationVIs, jobSalary, benefits, skills } = jobData.hits[i];
  console.log("Title:", jobTitle);
  console.log(`Salary: ${jobSalary}$`);
  console.log("Location:", ...locationVIs);
  console.log("Benefits:");
  for (let j = 0; j < benefits.length; j++) {
    let { benefitValue } = benefits[j];
    console.log("-", benefitValue);
  }
  console.log("Skills:");
  for (let k = 0; k < skills.length; k++) {
    console.log("-", skills[k]);
  }
  console.log("------------------------------------------------------------");
}

// Part 3: