// Counter
{
  const counter = document.getElementById("counter");
  function countUp() {
    counter.innerText++;
    console.log("Counter up!");
  }
  function countDown() {
    counter.innerText--;
    console.log("Counter down!");
  }
  const divNow = document.getElementById("now");
  function myTime() {
    divNow.innerHTML = new Date();
  }
}

// Timer
{
  const currentTime = document.getElementById("timer"),
    startButton = document.getElementById("start"),
    stopButton = document.getElementById("stop"),
    timerInput = document.getElementById("timer-input");

  startButton.addEventListener("click", () => {
    currentTime.innerText = timerInput.value;
    timerInput.value = "";
    let countdownInterval = setInterval(function () {
      if (currentTime.innerText > 0 && currentTime.innerText !== "") {
        currentTime.innerText--;
      } else {
        clearInterval(countdownInterval);
        currentTime.innerText = "Done!";
      }
      stopButton.addEventListener("click", () => {
        clearInterval(countdownInterval);
        currentTime.innerText = "Stopped!";
      });
    }, 1000);
  });
}

// Random quote
const quotes = [
    {
      quoteText:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      quoteAuthor: "Thomas Edison",
    },
    {
      quoteText: "You can observe a lot just by watching.",
      quoteAuthor: "Yogi Berra",
    },
    {
      quoteText: "A house divided against itself cannot stand.",
      quoteAuthor: "Abraham Lincoln",
    },
    {
      quoteText: "Difficulties increase the nearer we get to the goal.",
      quoteAuthor: "Johann Wolfgang von Goethe",
    },
    {
      quoteText: "Fate is in your hands and no one elses",
      quoteAuthor: "Byron Pulsifer",
    },
    {
      quoteText: "Be the chief but never the lord.",
      quoteAuthor: "Lao Tzu",
    },
    {
      quoteText: "Nothing happens unless first we dream.",
      quoteAuthor: "Carl Sandburg",
    },
    {
      quoteText: "Well begun is half done.",
      quoteAuthor: "Aristotle",
    },
    {
      quoteText: "Life is a learning experience, only if you learn.",
      quoteAuthor: "Yogi Berra",
    },
    {
      quoteText: "Self-complacency is fatal to progress.",
      quoteAuthor: "Margaret Sangster",
    },
    {
      quoteText: "Peace comes from within. Do not seek it without.",
      quoteAuthor: "Buddha",
    },
    {
      quoteText: "What you give is what you get.",
      quoteAuthor: "Byron Pulsifer",
    },
    {
      quoteText: "We can only learn to love by loving.",
      quoteAuthor: "Iris Murdoch",
    },
    {
      quoteText: "Life is change. Growth is optional. Choose wisely.",
      quoteAuthor: "Karen Clark",
    },
    {
      quoteText: "You'll see it when you believe it.",
      quoteAuthor: "Wayne Dyer",
    },
    {
      quoteText: "Today is the tomorrow we worried about yesterday.",
      quoteAuthor: "",
    },
    {
      quoteText: "It's easier to see the mistakes on someone else's paper.",
      quoteAuthor: "",
    },
    {
      quoteText: "Every man dies. Not every man really lives.",
      quoteAuthor: "",
    },
    {
      quoteText: "To lead people walk behind them.",
      quoteAuthor: "Lao Tzu",
    },
    {
      quoteText: "Having nothing, nothing can he lose.",
      quoteAuthor: "William Shakespeare",
    },
    {
      quoteText: "Trouble is only opportunity in work clothes.",
      quoteAuthor: "Henry J. Kaiser",
    },
    {
      quoteText: "A rolling stone gathers no moss.",
      quoteAuthor: "Publilius Syrus",
    },
    {
      quoteText: "Ideas are the beginning points of all fortunes.",
      quoteAuthor: "Napoleon Hill",
    },
    {
      quoteText: "Everything in life is luck.",
      quoteAuthor: "Donald Trump",
    },
    {
      quoteText: "Doing nothing is better than being busy doing nothing.",
      quoteAuthor: "Lao Tzu",
    },
    {
      quoteText: "Trust yourself. You know more than you think you do.",
      quoteAuthor: "Benjamin Spock",
    },
    {
      quoteText: "Study the past, if you would divine the future.",
      quoteAuthor: "Confucius",
    },
    {
      quoteText: "The day is already blessed, find peace within it.",
      quoteAuthor: "",
    },
    {
      quoteText: "From error to error one discovers the entire truth.",
      quoteAuthor: "Sigmund Freud",
    },
    {
      quoteText: "Well done is better than well said.",
      quoteAuthor: "Benjamin Franklin",
    },
    {
      quoteText: "Bite off more than you can chew, then chew it.",
      quoteAuthor: "Ella Williams",
    },
    {
      quoteText: "Work out your own salvation. Do not depend on others.",
      quoteAuthor: "Buddha",
    },
    {
      quoteText: "One today is worth two tomorrows.",
      quoteAuthor: "Benjamin Franklin",
    },
    {
      quoteText: "Once you choose hope, anythings possible.",
      quoteAuthor: "Christopher Reeve",
    },
    {
      quoteText: "God always takes the simplest way.",
      quoteAuthor: "Albert Einstein",
    },
    {
      quoteText: "One fails forward toward success.",
      quoteAuthor: "Charles Kettering",
    },
    {
      quoteText: "From small beginnings come great things.",
      quoteAuthor: "",
    },
    {
      quoteText: "Learning is a treasure that will follow its owner everywhere",
      quoteAuthor: "Chinese proverb",
    },
    {
      quoteText: "Be as you wish to seem.",
      quoteAuthor: "Socrates",
    },
    {
      quoteText: "The world is always in movement.",
      quoteAuthor: "V. Naipaul",
    },
    {
      quoteText: "Never mistake activity for achievement.",
      quoteAuthor: "John Wooden",
    },
    {
      quoteText: "What worries you masters you.",
      quoteAuthor: "Haddon Robinson",
    },
    {
      quoteText: "One faces the future with ones past.",
      quoteAuthor: "Pearl Buck",
    },
    {
      quoteText: "Goals are the fuel in the furnace of achievement.",
      quoteAuthor: "Brian Tracy",
    },
    {
      quoteText: "Who sows virtue reaps honour.",
      quoteAuthor: "Leonardo da Vinci",
    },
    {
      quoteText: "Be kind whenever possible. It is always possible.",
      quoteAuthor: "Dalai Lama",
    },
    {
      quoteText: "Talk doesn't cook rice.",
      quoteAuthor: "Chinese proverb",
    },
    {
      quoteText: "He is able who thinks he is able.",
      quoteAuthor: "Buddha",
    },
    {
      quoteText: "Be as you wish to seem.",
      quoteAuthor: "Socrates",
    },
    {
      quoteText: "A goal without a plan is just a wish.",
      quoteAuthor: "Larry Elder",
    },
    {
      quoteText: "To succeed, we must first believe that we can.",
      quoteAuthor: "Michael Korda",
    },
    {
      quoteText: "Learn from yesterday, live for today, hope for tomorrow.",
      quoteAuthor: "Albert Einstein",
    },
    {
      quoteText: "A weed is no more than a flower in disguise.",
      quoteAuthor: "James Lowell",
    },
    {
      quoteText: "Do, or do not. There is no try.",
      quoteAuthor: "Yoda",
    },
    {
      quoteText: "All serious daring starts from within.",
      quoteAuthor: "Harriet Beecher Stowe",
    },
    {
      quoteText: "The best teacher is experience learned from failures.",
      quoteAuthor: "Byron Pulsifer",
    },
    {
      quoteText: "Think how hard physics would be if particles could think.",
      quoteAuthor: "Murray Gell-Mann",
    },
    {
      quoteText: "Love is the flower you've got to let grow.",
      quoteAuthor: "John Lennon",
    },
    {
      quoteText: "Don't wait. The time will never be just right.",
      quoteAuthor: "Napoleon Hill",
    },
    {
      quoteText: "One fails forward toward success.",
      quoteAuthor: "Charles Kettering",
    },
    {
      quoteText: "Time is the wisest counsellor of all.",
      quoteAuthor: "Pericles",
    },
    {
      quoteText: "You give before you get.",
      quoteAuthor: "Napoleon Hill",
    },
    {
      quoteText: "Wisdom begins in wonder.",
      quoteAuthor: "Socrates",
    },
    {
      quoteText: "Without courage, wisdom bears no fruit.",
      quoteAuthor: "Baltasar Gracian",
    },
    {
      quoteText: "Change in all things is sweet.",
      quoteAuthor: "Aristotle",
    },
    {
      quoteText: "What you fear is that which requires action to overcome.",
      quoteAuthor: "Byron Pulsifer",
    },
  ],
  getQuoteButton = document.getElementById("quote-btn"),
  text = document.getElementById("quote-text"),
  author = document.getElementById("quote-author");

function randomIndex() {
  return Math.floor(Math.random() * quotes.length);
}
getQuoteButton.addEventListener("click", () => {
  let { quoteText, quoteAuthor } = quotes[randomIndex()];
  text.innerText = quoteText;
  author.innerText = quoteAuthor;
  console.log("Quote shown:", quoteText, quoteAuthor);
});

// Timesheet
const timeSheetData = [
    { project: "Learn front-end", task: "Learn HTML", time: 6 },
    { project: "Learn front-end", task: "Learn CSS", time: 8 },
    {
      project: "Learn front-end",
      task: "Learn JS Variables and Data Types",
      time: 6,
    },
    { project: "Learn git", task: "Learn git basics", time: 2 },
  ],
  timeSheetBody = document.getElementById("timesheet-body"),
  projectInput = document.getElementById("project-input"),
  taskInput = document.getElementById("task-input"),
  timeInput = document.getElementById("time-input"),
  projectAddButton = document.getElementById("project-add-btn");

function displayTimesheet() {
  timeSheetBody.innerHTML = "";
  for (let i = 0; i < timeSheetData.length; i++) {
    let { project, task, time } = timeSheetData[i];
    timeSheetBody.innerHTML += `
    <tr>
      <td>${project}</td>
      <td>${task}</td>
      <td>${time}</td>
      <td style="text-align: center;"><button onclick="removeLine(event)">X</button></td>
      <td style="text-align: center;"><button onclick="update(event)">U</button></td>
    </tr>
  `;
  }
}
displayTimesheet();

projectAddButton.addEventListener("click", () => {
  if (
    projectInput.value !== "" &&
    taskInput.value !== "" &&
    timeInput.value !== ""
  ) {
    timeSheetData.push({
      project: `${projectInput.value}`,
      task: `${taskInput.value}`,
      time: `${timeInput.value}`,
    });
    displayTimesheet();
  }
  console.log(timeSheetData);
});

function removeLine(event) {
  let td = event.target.parentNode,
    tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}

function clearInput() {
  projectInput.value = "";
  taskInput.value = "";
  timeInput.value = "";
}

function update(event) {
  let row = event.target.parentNode.parentNode;
  if (
    projectInput.value !== "" &&
    taskInput.value !== "" &&
    timeInput.value !== ""
  ) {
    console.log(projectInput.value);
    row.innerHTML = `
  <tr>
      <td>${projectInput.value}</td>
      <td>${taskInput.value}</td>
      <td>${timeInput.value}</td>
      <td style="text-align: center;"><button onclick="removeLine(event)">X</button></td>
      <td style="text-align: center;"><button onclick="update(event)">U</button></td>
    </tr>
  `;
  }
}
