async function getData() {
  const response = await axios.get("https://sheetdb.io/api/v1/zfzwohi9y69i2"),
    result = await response.data;
  return result;
}
