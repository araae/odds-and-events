let bank = [];
let odds = [];
let evens = [];

//add a new number to the bank
function addNumber(n) {
  bank.push(n);
  render();
}

//if bank is empty do nothing
//else, take the first number from the bank
//categorize it in evens or odds
function sortOne() {
  if (bank.length === 0) return;
  const n = bank.shift();
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
  render();
}

//sort the numbers until the bank is empty
function sortAll() {
  while (bank.length > 0) {
    sortOne();
  }
}

//create an h1 element and set the text to app title
function Title() {
  const h1 = document.createElement("h1");
  h1.textContent = "Odds and Evens";
  return h1;
}

//create a container, add a heading and a box with numbers
function NumberList(heading, numbers) {
  const container = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = heading;
  const box = document.createElement("div");
  box.textContent = numbers.join(" ");

  container.appendChild(h2);
  container.appendChild(box);

  return container;
}
