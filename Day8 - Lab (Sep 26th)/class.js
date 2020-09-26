const username = document.getElementById("username"),
  password = document.getElementById("password");

function logInValidate() {
  console.log("username:", username.value);
  console.log("password", password.value);
  if (username.value === "admin" && password.value === "123456") {
    alert("Log in successfully!");
    window.location = "https://dantri.com.vn/";
  } else {
    alert("Wrong username or password");
  }
}

function pressEnter(e) {
  if (e.key === "Enter") {
    logInValidate();
  }
}

let phoneList = [
  { name: "iPhone X", price: 20e6, brand: "Apple", img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg"  },
  { name: "Vsmart Joy 4", price: 3e6, brand: "Vsmart" },
  { name: "Galaxy Fold 2", price: 40e6, brand: "Samsung" },
  { name: "Mi 10", price: 10e6, brand: "Xiaomi" },
];
console.log(phoneList);

function displayPhone() {
  let tbody = document.getElementById("phones-list");
  tbody.innerHTML = "";
  for (let i = 0; i < phoneList.length; i++) {
        const phone = phoneList[i];
    let html = `
      <tr>
          <td>${i + 1}</td>
          <td><img src="${phone.img}" alt="${phone.name}" width="100px"></td>
          <td><span onclick="click(${phone.name})">${phone.name}<span></td>
          <td>${phone.price}</td>
          <td>${phone.brand}</td>
        </tr>
    `;
    tbody.innerHTML += html;
  }
}
displayPhone();
function click(phone) {
alert(phone);
}
