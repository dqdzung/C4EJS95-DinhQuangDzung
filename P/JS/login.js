function loginEvent() {
  const idInput = document.getElementById("id-input"),
    passwordInput = document.getElementById("password-input"),
    loginButton = document.getElementById("login-btn");
  loginButton.addEventListener("click", () => {
    login(idInput.value, passwordInput.value);
    idInput.value = passwordInput.value = "";
  });
  passwordInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      login(idInput.value, passwordInput.value);
    }
  });
  idInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      login(idInput.value, passwordInput.value);
    }
  });
}
loginEvent();

const loginDiv = document.getElementById("login-div");
async function login(user, password) {
  const data = await getData();
  let login = false;
  for (let i = 0; i < data.length; i++) {
    if (user === data[i].id && password === data[i].password) {
      console.log("ID:", user, "PW:", password, `- ${data[i].role}`);
      alert("Login successful!");
      login = true;
      loginDiv.innerHTML = `Welcome back, ${user}! <button onclick="signOut()">Sign out</button>`;
    }
  }
  if (!login) {
    alert("Wrong ID or password!");
  }
}

function signOut() {
  loginDiv.innerHTML = `<div id="login-div">
  <input id="id-input" type="text" placeholder="ID" />
  <input id="password-input" type="password" placeholder="Password" />
  <button id="login-btn">Login</button>
</div>`;
  loginEvent();
}
