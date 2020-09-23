// 11.
const upperButton = document.getElementById("upper_btn"),
  nameInput = document.getElementById("name_input"),
  name = nameInput.value;
upperButton.addEventListener("click", (e) => {
  document.getElementById("result").innerText = nameInput.value.toUpperCase();
});
 
// 12.
