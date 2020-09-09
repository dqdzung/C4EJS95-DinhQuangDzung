// Optimize Bubble sort
const sortArr = [13, 33, 68, 32, 33, 17, 33, 70, 63, 82, 76, 15, 19, 26, 95, 45, 89, 58, 82, 16];
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
for (let x in product) { // use "for" loop to print
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

const jobSearch = "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js" 
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
  console.log("Salary:",jobSalary);
  console.log("Benefits:");
  for (let j = 0; j < benefits.length; j++) { // Access "benefits" array
    let { benefitName, benefitValue } = benefits[j]; // Deconstruct each "benefits[j]" object to get "benefitName" and "benefitValue"
    console.log(`${benefitName}:`, benefitValue);
  }
  console.log("Location:", ...locationVIs);
  console.log("Skills:", ...skills);
  console.log(jobRequirement);
}

// 4. Dictionary
let myDictionary = {
  "debug": "The process of figuring out why your program has a certain error and how to fix it",
  "done": "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  "defect": "The formal word for 'error'",
  "pm": "The short version of Project Manager, the person in charge of the final result of a project",
  "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
while (true) {
const userWord = prompt("Welcome to my Dictionary. Looking up a word?").toLowerCase();
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
      if (newDictEntry !== "" && newDictEntry !== null && newDictEntry !== undefined) {
        myDictionary[userWord] = newDictEntry;
        alert("New entry added!");
        break;
      }
    }
  }
}
}