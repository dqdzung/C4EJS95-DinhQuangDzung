// 11.
const upperButton = document.getElementById("upper_btn"),
  nameInput = document.getElementById("name_input");

upperButton.addEventListener("click", function () {
  document.getElementById("result").innerText = nameInput.value.toUpperCase();
  nameInput.value = "";
});

// 12.
const items = ["Backpack", "Watch", "Ring"],
  itemList = document.getElementById("item_list"),
  itemInput = document.getElementById("item_input"),
  addButton = document.getElementById("add"),
  itemClass = document.getElementsByClassName("item"),
  removeButton = document.getElementsByClassName("remove");

function addItem(item) {
  item = `<li><span class="item">${item}</span></li>`;
  itemList.innerHTML += item;
  return;
}
for (let i = 0; i < items.length; i++) {
  addItem(items[i]);
}
for (let i = 0; i < 3; i++) {
  itemList.removeChild(itemList.children[0]);
}
function addRemoveButton(itemPosition) {
  itemClass[itemPosition].insertAdjacentHTML(
    "afterend",
    " <button class='remove'>Remove</button>"
  );
  return;
}
for (let i = 0; i < itemClass.length; i++) {
  addRemoveButton(i);
}
function addRemoveListener(position) {
  removeButton[position].addEventListener("click", (e) => {
    console.log(`Remove ${position + 1} was clicked`);
    e.target.parentNode.remove();
  });
  return;
}

for (let i = 0; i < removeButton.length; i++) {
  addRemoveListener(i);
}
addButton.addEventListener("click", function () {
  let newItem = itemInput.value;
  if (newItem !== "") {
    items.push(newItem);
    addItem(newItem);
    addRemoveButton(itemClass.length - 1);
    addRemoveListener(removeButton.length - 1);
    itemInput.value = "";
    console.log(`${newItem} added`, items);
  }
});

function updateItemList() {
  itemList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    let item = `<li><span class="item">${items[i]}</span> <button class='remove'>Remove</button></li>`;
    itemList.innerHTML += item;
  }
}
function addRemoveListener() {
  for (let i = 0; i < items.length; i++) {
    removeButton[i].addEventListener("click", (e) => {
      console.log(`Remove ${i + 1} was clicked`);
    });
  }
  return;
}
updateItemList();
addRemoveListener();

addButton.addEventListener("click", function () {
  let newItem = itemInput.value;
  if (newItem !== "") {
    items.push(newItem);
    updateItemList();
    addRemoveListener();
    itemInput.value = "";
    console.log(`${newItem} added`, items);
  }
});


function buildItemList() {
  let newList = [];
  for (let i = 0; i < items.length; i++) {
    newList[i] = items[i];
  }
  return newList;
}
function addToHTML(array) {
  itemList.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let item = `<li><span class="item">${array[i]}</span> <button class='remove'>Remove</button></li>`;
    itemList.innerHTML += item;
  }
  return;
}
addToHTML(buildItemList());
addRemoveListener(buildItemList());
addButton.addEventListener("click", function () {
  let newItem = itemInput.value;
  if (newItem !== "") {
    items.push(newItem);
    addToHTML(buildItemList());
    addRemoveListener(buildItemList());
    itemInput.value = "";
    console.log("List:", buildItemList());
  }
  return;
});
function addRemoveListener(array) {
  for (let i = 0; i < array.length; i++) {
    removeButton[i].addEventListener("click", (e) => {
      console.log(`Remove button ${i + 1} was clicked, remove ${items[i]}`);
      items.splice(i, 1);
      addToHTML(buildItemList());
      addRemoveListener(buildItemList());
      console.log("List:", buildItemList());
    });
  }
  return;
}
