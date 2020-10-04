async function getData() {
  const response = await axios.get("https://sheetdb.io/api/v1/zfzwohi9y69i2"),
    result = await response.data;
  return result;
}

async function postData(id, password) {
  const data = await getData();
  let userExist = false;
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      userExist = true;
      console.log(`User "${data[i].id}" already existed`);
    }
  }
  if (userExist) {
    alert("User already existed!");
  } else {
    const response = await axios.post(
        "https://sheetdb.io/api/v1/zfzwohi9y69i2",
        {
          data: { id: id, password: password, role: "user" },
        }
      ),
      result = await response.data;
    console.log(result);
    console.log("Created user:", id, "PW:", password);
  }
}
