let books = [
  "JS for dummies",
  "Data Structure",
  "Coding tutorial",
  "Book 4",
  "Book by Hung",
  "Book 6",
  "Book 7",
  "Book 8",
  "Book 9",
  "Book 10",
];

//Exercise: Find "Book by Hung" and change name into "Book by Dzung"
//Use 'for' loop
{
  console.log(`Before: ${books}`);
  for (let i = 0; i < books.length; i++) {
    if (books[i] === "Book by Hung") {
      books[i] = "Book by Dzung";
    }
  }
  console.log(`After: ${books}`);
}

//Use 'do...while' loop
{
  console.log(`Before: ${books}`);
  let i = 0;
  do {
    if (books[i] === "Book by Dzung") {
      books[i] = "Book by Hung";
    }
    i++;
  } while (i < books.length);
  console.log(`After: ${books}`);
}

//Exercise 3:
{
  let bill = [124, 48, 268];
  let tipPercent;
  let tipEachBill = [];
  let billAndTips = [];
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] <= 50) {
      tipPercent = 0.2;
    } else if (bill[i] > 50 && bill[i] <= 200) {
      tipPercent = 0.15;
    } else {
      tipPercent = 0.1;
    }
    tipEachBill[i] = bill[i] * tipPercent;
    billAndTips[i] = bill[i] + tipEachBill[i];
  }
  console.log(`Amount of tips for each bill: ${tipEachBill}`);
  console.log(`Total amount for each bill: ${billAndTips}`);
}