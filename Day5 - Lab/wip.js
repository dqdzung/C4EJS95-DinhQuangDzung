const quizzes = [
  {
    question: "Question 1?",
    choice: ["choice1a", "choice1b", "choice1c", "choice1d"],
    correct: 1,
    done: false,
  },
  {
    question: "Question 2?",
    choice: ["choice2a", "choice2b", "choice2c", "choice2d"],
    correct: 4,
    done: false,
  },
  {
    question: "Question 3?",
    choice: ["choice3a", "choice3b", "choice3c", "choice3d"],
    correct: 3,
    done: false,
  },
  {
    question: "Question 4?",
    choice: ["choice4a", "choice4b", "choice4c", "choice4d"],
    correct: 2,
    done: false,
  },
];
do {
let randomIndex = Math.floor(Math.random() * quizzes.length),
  { question, choice, correct, done } = quizzes[randomIndex],
  choiceList = "";
for (let i = 0; i < choice.length; i++) {
  choiceList += `\n${i + 1}. ${choice[i]}`;
}
const userAnswer = prompt(`${question} ${choiceList}`);
done = true;
if (userAnswer === correct) {
  alert("Grats. You're right");
} else {
  alert(`Better luck next time. Correct answer was ${correct}.`);
}
}
while(done === false);
