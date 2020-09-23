// 1.
// const container = document.getElementById("list");
// for (let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`);
//   container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`);
//   container.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
//   container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
// }
// Ans: 1.d - 2.a - 3.c - 4.b

// 2.

// 3.1 NO
// 3.2 NO
// 4. Use getElementsByTagName function to get ALL of the <li> tag. Print ALL of the DOM you get from the function
const list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  console.log(list[i].innerText);
}

// 5. Use getElementsByTagName function to get ALL of the <div> tag. Print ALL of the DOM you get from the function
const singer = document.getElementsByClassName("singer");
for (let i = 0; i < singer.length; i++) {
  console.log(singer[i].innerHTML);
}

// 6. Delete element
list[1].remove();
singer[1].remove();

// 7. addEventListener with callback function to get more info about the event
// 7.1 Button click
document.getElementById("button1").addEventListener("click", (e) => {
  console.log(e.target);
});
document.getElementById("button2").addEventListener("click", (e) => {
  console.log(e.target);
});
// Console shows the element that triggered the event.

// 7.2 Key down
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
// Console shows the key that triggered the event.

// 8. Write a function, using alert to show your name and one wish
function wish() {
  alert("Greetings! A wish...");
}
wish();

// 9. Write a function, using alert to show user’s name and a wish, name and wish are function parameters
// 10. Write a function, using alert to show user’s name and a wish, name and wish are function parameters. Handle the case of missing wish in function parameters
function makeAWish(name, wish) {
    if (!wish) {
       wish = "for nothing, lol";}
    alert(`Greetings! I'm ${name} and I wish ${wish}!`);
}
  makeAWish("B", "to be Batman");
  makeAWish("B");
  