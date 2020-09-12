// Lab
// Part 1
// (1)
// function getRandom(a,b) {
//   let result = Math.floor(Math.random()*(b - a) + a);
//   return result;
// }
// console.log(getRandom(1,100));
// // (2)
// const myArray = [2, 5, 6, 9, 10, 1, 9, 13, 14, 3, 4, 11, 16],
//   LENGTH = myArray.length;
// let randomIndex = Math.floor(Math.random() * LENGTH);
// randomNumber = myArray[randomIndex];
// console.log(randomNumber);
// (3)
const quizzes = [
  {
    question: "Question number 1?",
    choice: ["choice1a", "choice1b", "choice1c", "choice1d"],
    correct: 1,
  },
  {
    question: "Question number 2?",
    choice: ["choice2a", "choice2b", "choice2c", "choice2d"],
    correct: 4,
  },
  {
    question: "Question number 3?",
    choice: ["choice3a", "choice3b", "choice3c", "choice3d"],
    correct: 3,
  },
  {
    question: "Question number 4?",
    choice: ["choice4a", "choice4b", "choice4c", "choice4d"],
    correct: 2,
  },
];
// (4) (5) (6)
const LENGTH = quizzes.length;
let randomIndex = Math.floor(Math.random() * LENGTH),
  randomQuestion = quizzes[randomIndex],
  { question, choice, correct, done } = randomQuestion;

while (true) {
  if (quizzes.done !== true) {
    const userAnswer = Number(
      prompt(
        `${question} \n1.${choice[0]}\n2.${choice[1]}\n3.${choice[2]}\n4.${choice[3]}`
      )
    );
    if (userAnswer === correct) {
      alert("Grats. You're right");
    } else {
      alert(`Better luck next time. Correct answer was ${correct}.`);
    }
    quizzes.done = true;
  } else {
    alert("Out of question!");
    break;
  }
}
