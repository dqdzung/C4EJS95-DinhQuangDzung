// 4.
{
  function f() {
    return Math.floor(Math.random() * 11);
  }
  const x = f();
  console.log("0 - 10 test:");
  if (x < 0) {
    console.log(x, "Failed: the number is smaller than 0");
  } else if (x > 10) {
    console.log(x, "Failed: the number is bigger than 10");
  } else {
    console.log(x, "Passed, bravo");
  }
}

// 5.
{
  function f(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  const x = f(4, 16);
  console.log("4 - 16 test:");
  if (x < 4) {
    console.log(x, "Failed: the number is smaller than 4");
  } else if (x > 16) {
    console.log(x, "Failed: the number is bigger than 16");
  } else {
    console.log(x, "Passed, bravo");
  }
}

// 6.
{
  function distanceCal(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
  const d = distanceCal(3, 10, 0, 6);
  if (d !== 5) {
    console.log(d, "Failed: the calculation is wrong");
  } else {
    console.log(d, "Passed, bravo");
  }
}

// 7.
const quoteDiv = document.getElementById("quote"),
  authorDiv = document.getElementById("author");
async function getQuote() {
  const response = await fetch("http://quotes.rest/qod.json"),
    result = await response.json(),
    quote = result.contents.quotes[0].quote,
    author = result.contents.quotes[0].author;
  console.log(result);
  console.log(quote, author);
  show(quote, author);
}
function show(quote, author) {
  quoteDiv.innerText = quote;
  authorDiv.innerText = author;
}
getQuote();

// 8.
const wishlist = document.getElementById("wishlist");
async function getWishlist() {
  const response = await fetch("https://sheetdb.io/api/v1/yp49a4gbviq0e"),
    result = await response.json();
  console.log(result);
  wishlist.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    let HTML = `<table>
        <thead>
            <tr>
                <td>${i + 1}.</td>
                <td>${result[i].name}</td>
                <td><button id="remove">X</button></td>
            </tr>
        </thead>`;
    wishlist.innerHTML += HTML;
  }
}
getWishlist();

