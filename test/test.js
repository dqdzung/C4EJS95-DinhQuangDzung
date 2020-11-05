// A.
// 1.
const findOppositeNumber = (n, inputNumber) => {
  const distanceToOpposite = n / 2,
    oppositeNumber = inputNumber + distanceToOpposite;
  if (oppositeNumber < n) {
    return oppositeNumber;
  } else {
    return oppositeNumber - n;
  }
};
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));

//2.
const merge2String = (str1, str2) => {
  let result = "";
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    if (str1[i]) {
      result += str1[i];
    }
    if (str2[i]) {
      result += str2[i];
    }
  }
  return result;
};
console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcde", "123"));
console.log(merge2String("abcd", "123456789"));

//3.
const inputDiv = document.getElementById("number-input");
const triesDiv = document.getElementById("tries");

const getRandomResult = () => {
  return Math.floor(Math.random() * 11);
};
let rollTries = 3;
triesDiv.innerHTML = `Rolls left: ${rollTries}`;
function roll() {
  const guess = inputDiv.value - 0;
  console.log(guess);
  if (!guess && guess != 0) {
    alert("Please enter a number!");
  } else {
    rollTries--;
    if (rollTries >= 0) {
      triesDiv.innerHTML = `Rolls left: ${rollTries}`;
      const result = getRandomResult();
      if (guess === result) {
        alert(`Your guess: ${guess}. You win, result is ${result}!`);
      } else {
        alert(`Your guess: ${guess}. You lose, result is ${result}!`);
      }
    } else {
      alert("You're out of rolls, please refresh!");
    }
  }
}
