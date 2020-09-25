// 11.
const upperButton = document.getElementById("upper_btn"),
  nameInput = document.getElementById("name_input");

upperButton.addEventListener("click", function () {
  document.getElementById("result").innerText = nameInput.value.toUpperCase();
  nameInput.value = "";
});

// 12.
let items = ["Backpack", "Watch", "Ring"],
  itemList = document.getElementById("item_list"),
  itemInput = document.getElementById("item_input"),
  addButton = document.getElementById("add"),
  removeButton = document.getElementsByClassName("remove");

function addToHTML(array) {
  itemList.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let item = `<li><span class="item">${array[i]}</span> <button class='remove'>Remove</button></li>`;
    itemList.innerHTML += item;
  }
  return;
}
addToHTML(items);
addRemoveListener(items);
addButton.addEventListener("click", function () {
  let newItem = itemInput.value;
  if (newItem !== "") {
    items.push(newItem);
    addToHTML(items);
    addRemoveListener(items);
    itemInput.value = "";
    console.log("List:", items);
  }
  return;
});
function addRemoveListener(array) {
  for (let i = 0; i < array.length; i++) {
    removeButton[i].addEventListener("click", (e) => {
      console.log(`Remove button ${i + 1} was clicked, remove ${items[i]}`);
      items.splice(i, 1);
      addToHTML(items);
      addRemoveListener(items);
      console.log("List:", items);
    });
  }
  return;
}
