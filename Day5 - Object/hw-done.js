// Optimize Bubble sort
const sortArr = [13,33,68,32,33,17,33,70,63,82,76,15,19,26,95,45,89,58,82,16];
let swapped;
const length = sortArr.length;
console.log(`Before ${sortArr}`);
do {
  swapped = false;                      // Entering "for" loop, "swapped" is false
  for (let i = 0; i < length; i++) {    // "for" loops through array and
    if (sortArr[i] > sortArr[i + 1]) {  // executes a swap if condition is true
      let temp = sortArr[i];
      sortArr[i] = sortArr[i + 1];
      sortArr[i + 1] = temp;
      swapped = true;                   // Exiting "for" loop, "swapped" is true after a swap || "swapped" stays false if no swap is done
    }
  }
} while (swapped);                      // "swapped" is true, "do...while" loops backs || "swapped" stays false, "do...while" breaks

// Object Homework
let inventory = {
  gold: 500,
  pouch: ["flint", "twine", "gem"],
  backpack: ["xylophone", "dagger", "bedroll", "bread"],
};
inventory.pocket = ["seashell", "berry", "lint"]; // Add property "pocket"
const indexOfDagger = inventory.backpack.indexOf("dagger"); // Get index of "dagger"
inventory.backpack.splice(indexOfDagger, 1); // Delete "dagger"
inventory.gold += 50; // Add 50 gold
delete inventory.pouch; // Delete "pouch"
console.log(inventory);

// 1. for and Object
const product = {
  name: "Xiaomi rice cooker",
  price: 1700,
  brand: "Xiaomi",
  color: "white",
};
for (let x in product) {
  console.log(x); // "x" receives "keys" from "product"
}
for (let x in product) {
  // use "for" loop to print
  console.log(`${x}:`, product[x]);
}

// 2. Object destructuring
const task = {
  subject: "Implement login feature",
  createdBy: "Hoang Ngoc Duc",
  assignTo: "Nguyen Phuong Nam",
  dueDate: "2019-10-08T18:00:24+0000",
  expectedHours: 0.5,
};
let { subject, dueDate, assignTo } = task;

// 3.
// Outermost layer is an Object
// hits property is an Array

const jobSearch =
  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
// Replace link with the its content to run the codes below this line

// Get info from each "hit" array
const length = jobSearch.hits.length;
for (let i = 0; i < length; i++) {
  let {
    jobTitle,
    locationVIs,
    jobSalary,
    benefits,
    skills,
    jobRequirement,
  } = jobSearch.hits[i]; // Deconstruct each "jobSearch.hits" object to get data about job title, location, salary, benefits, skills and requirements
  console.log("");
  console.log(jobTitle);
  console.log("Salary:", jobSalary);
  console.log("Benefits:");
  for (let j = 0; j < benefits.length; j++) {
    // Access "benefits" array
    let { benefitName, benefitValue } = benefits[j]; // Deconstruct each "benefits[j]" object to get "benefitName" and "benefitValue"
    console.log(`${benefitName}:`, benefitValue);
  }
  console.log("Location:", ...locationVIs);
  console.log("Skills:", ...skills);
  console.log(jobRequirement);
}

// 4. Dictionary
let myDictionary = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for 'error'",
  pm:
    "The short version of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
while (true) {
  const userWord = prompt(
    "Welcome to my Dictionary. Looking up a word?"
  ).toLowerCase();
  const noAnswer = `Can't find your word: ${userWord}, add an explanation`;
  let found;
  if (userWord !== "") {
    for (const dictWord in myDictionary) {
      let dictAnswer = `${dictWord}:\n${myDictionary[dictWord]}`;
      if (userWord === dictWord) {
        found = true;
        alert(dictAnswer);
      }
    }
    if (!found) {
      while (true) {
        const newDictEntry = prompt(noAnswer);
        if (
          newDictEntry !== "" &&
          newDictEntry !== null &&
          newDictEntry !== undefined
        ) {
          myDictionary[userWord] = newDictEntry;
          alert("New entry added!");
          break;
        }
      }
    } else {
      break;
    }
  }
}

//5. Array of Products
let myProducts = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "Black",
    category: "Phone",
  },
  {
    name: "IPhone X",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];
const LENGTH = myProducts.length;

//5.1 Log "name" and "price" of all products
{
  for (let i = 0; i < LENGTH; i++) {
    let { name, price } = myProducts[i];
    console.log("--------------------------------------");
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
  }
}

//5.2
{
  for (let i = 0; i < LENGTH; i++) {
    let { name, price } = myProducts[i],
      position = i + 1;
    console.log(`#${position}. ${name}`);
    console.log(`    Price: ${price}`);
  }
  while (true) {
    const inputPosition = Number(prompt("Enter a product position"));
    if (inputPosition <= LENGTH && inputPosition > 0) {
      let index = inputPosition - 1,
        product = myProducts[index];
      console.clear();
      for (const property in product) {
        console.log(`${property}: ${product[property]}`);
      }
      break;
    } else {
      alert(`Product at position ${inputPosition} doesn't exist!`);
    }
  }
}

//5.3
{
  let found;
  while (true) {
    const inputCategory = prompt("Enter a category:").toLowerCase();
    found = false;
    for (let i = 0; i < LENGTH; i++) {
      let { name, price, category } = myProducts[i];
      if (inputCategory === category.toLowerCase()) {
        console.log("--------------------------------------");
        console.log(`Name: ${name}`);
        console.log(`Price: ${price}`);
        found = true;
      }
    }
    if (found === false) {
      alert("Category doesn't exist!");
    } else {
      break;
    }
  }
}

//5.4
myProducts[0].providers = ["Phukienzero", "Dientuccc"];
myProducts[1].providers = ["Tgdd", "Ddghn", "VhStore"];
myProducts[2].providers = ["Tgdd"];
myProducts[3].providers = ["Tgdd"];
{
  for (let i = 0; i < LENGTH; i++) {
    let { name, price, providers } = myProducts[i],
      position = i + 1;
    console.log(`#${position}. ${name}`);
    console.log(`    Price: ${price}`);
    console.log("    Providers:", ...providers);
  }
}

//5.5
{
  let found;
  while (true) {
    const inputProvider = prompt("Enter a provider:").toLowerCase();
    found = false;
    for (let i = 0; i < LENGTH; i++) {
      let product = myProducts[i],
        { name, brand, price, color, category, providers } = product;
      for (let j = 0; j < providers.length; j++) {
        let indexProvider = providers[j].toLowerCase().indexOf(inputProvider);
        if (indexProvider !== -1) {
          console.log("--------------------------------------");
          // console.log(`Name: ${name}`);
          // console.log(`Brand: ${brand}`);
          // console.log(`Price: ${price}`);
          // console.log(`Color: ${color}`);
          // console.log(`Category: ${category}`);
          // console.log(`Providers: ${providers}`);
          for (const property in product) {
            console.log(`${property}: ${product[property]}`);
            found = true;
          }
        }
      }
    }
    if (found === false) {
      alert("Can't find provider!");
    } else {
      break;
    }
  }
}

// 6.
let learningTasks = [
  { task: "HTML", completion: false },
  { task: "CSS", completion: false },
  { task: "Basics of JS", completion: false },
  { task: "Node Package Manager (npm)", completion: false },
  { task: "Git", completion: false },
];
// 6.1 Log tasks
console.log("This is your learning task to front-end developer career:");
for (let i = 0; i < learningTasks.length; i++) {
  let { task, completion } = learningTasks[i],
    position = i + 1;
  console.log(`${position}. ${task}`);
  console.log(`   Complete: ${completion}`);
}
console.log("---------------------------------------------------------");
while (true) {
  const userPrompt = prompt(
    "What do you want to do (Read, New, Update, Complete, Delete, Quit)"
  ).toLowerCase();
  if (userPrompt === "quit") {
    break;
  } else {
    switch (userPrompt) {
      default:
        alert("Invalid command, please enter again!");
        break;
      case "new": // 6.2 Add new task
        const newTask = prompt("Add new task:");
        learningTasks.push({ task: newTask, completion: false });
        alert("New task added.");
        break;
      case "update": // 6.3 Update task
        const updatePosition = Number(prompt("Enter position to update:")),
          i = updatePosition - 1,
          updateTask = prompt("New title:");
        learningTasks[i].task = updateTask;
        alert(`Task #${updatePosition} updated.`);
        break;
      case "complete": // 6.4 Complete task
        const completePosition = Number(
            prompt("Enter position of task to complete:")
          ),
          j = completePosition - 1;
        learningTasks[j].completion = true;
        alert(`Task #${completePosition} completed.`);
        break;
      case "delete": // 6.5 Delete task
        const deletePosition = Number(prompt("Enter position to delete")),
          k = deletePosition - 1;
        learningTasks.splice(k, 1);
        alert(`Task #${deletePosition} deleted.`);
        break;
      case "read": // 6.6 Better logging
        console.clear();
        for (let i = 0; i < learningTasks.length; i++) {
          let { task, completion } = learningTasks[i],
            position = i + 1,
            completed = "[ ]";
          if (completion === true) {
            completed = "[X]";
          }
          console.log(`${position}. ${completed} ${task}`);
        }
    }
  }
}

// Turtle exercise:
// 7.
const pos = {
  x: 200,
  y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

// 8.
const square = {
  x: 100,
  y: 50,
  width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}

// 9.
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.height);
  rt(90);
  fd(rect.width);
  rt(90);
}

// 10.
clear();
const cmds = [
  { shape: "square", x: 20, y: 40, width: 50 },
  { shape: "rect", x: 8, y: 70, width: 12, height: 40 },
  { shape: "rect", x: 70, y: 70, width: 12, height: 40 },
  { shape: "rect", x: 10, y: 20, width: 70, height: 20 },
  { shape: "square", x: 25, y: 40, width: 14 },
  { shape: "square", x: 33, y: 42, width: 6 },
  { shape: "square", x: 50, y: 40, width: 14 },
  { shape: "square", x: 58, y: 42, width: 6 },
  { shape: "square", x: 40, y: 25, width: 8 },
  { shape: "square", penWidth: 1, x: 500, y: 500, width: 15 },
];
for (let i = 0; i < cmds.length; i++) {
  let { shape, x, y, width, height } = cmds[i];
  home();
  switch (shape) {
    case "square":
      penup();
      rt(90);
      fd(x);
      lt(90);
      fd(y);
      pendown();
      for (let i = 0; i < 4; i++) {
        fd(width);
        rt(90);
      }
      break;
    case "rect":
      penup();
      rt(90);
      fd(x);
      lt(90);
      fd(y);
      pendown();
      for (let i = 0; i < 2; i++) {
        fd(height);
        rt(90);
        fd(width);
        rt(90);
      }
      break;
  }
}

// 11+12.
clear();
const cmds = [
  { shape: "circle", x: 0, y: -20, radius: 60 },
  { shape: "circle", x: 0, y: 80, radius: 40 },
  { shape: "circle", x: -75, y: 10, radius: 20 },
  { shape: "circle", x: 75, y: 10, radius: 20 },
  { shape: "square", x: -65, y: -100, width: 30 },
  { shape: "square", x: 38, y: -100, width: 30 },
  { shape: "rect", x: -30, y: 80, width: 20, height: 4 },
  { shape: "rect", x: 10, y: 80, width: 20, height: 4 },
  { shape: "rect", x: -10, y: 50, width: 20, height: 6 },
  { shape: "square", x: 500, y: 500, width: 20 },
];
for (let i = 0; i < cmds.length; i++) {
  let { shape, x, y, width, height, radius } = cmds[i];
  home();
  switch (shape) {
    case "square":
      penup();
      rt(90);
      fd(x);
      lt(90);
      fd(y);
      pendown();
      for (let i = 0; i < 4; i++) {
        fd(width);
        rt(90);
      }
      break;
    case "rect":
      penup();
      rt(90);
      fd(x);
      lt(90);
      fd(y);
      pendown();
      for (let i = 0; i < 2; i++) {
        fd(height);
        rt(90);
        fd(width);
        rt(90);
      }
      break;
    case "circle":
      penup();
      rt(90);
      fd(x);
      lt(90);
      fd(y);
      pendown();
      for (let i = 0; i < 360; i++) {
        fd(radius / 57);
        rt(1);
      }
      break;
  }
}