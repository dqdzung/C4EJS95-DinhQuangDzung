const loginDiv = document.getElementById("login-div"),
  regButton = document.getElementById("reg-btn"),
  regID = document.getElementById("reg-id"),
  regPassword = document.getElementById("reg-pw");

function loginEvent() {
  const loginID = document.getElementById("login-id"),
    loginPassword = document.getElementById("login-pw"),
    loginButton = document.getElementById("login-btn");
  loginButton.addEventListener("click", () => {
    login(loginID.value, loginPassword.value);
    loginID.value = loginPassword.value = "";
  });
  loginPassword.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      login(loginID.value, loginPassword.value);
    }
  });
  loginID.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      login(loginID.value, loginPassword.value);
    }
  });
}
loginEvent();

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
  alert("Signing out!");
  loginDiv.innerHTML = `<div id="login-div">
  <input id="login-id" type="text" placeholder="ID" />
  <input id="login-pw" type="password" placeholder="Password" />
  <button id="login-btn">Login</button>
</div>`;
  loginEvent();
}

regButton.addEventListener("click", () => {
  postData(regID.value, regPassword.value);
  regID.value = regPassword.value = "";
})
