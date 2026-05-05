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

//build the form with three buttons
//connect buttons to state function
function InputForm() {
  const form = document.createElement("form");

  const label = document.createElement("label");
  label.textContent = "Add a number to the bank ";

  const input = document.createElement("input");
  input.type = "number";

  const addBtn = document.createElement("button");
  addBtn.type = "submit";
  addBtn.textContent = "Add number";

  const sortOneBtn = document.createElement("button");
  sortOneBtn.type = "button";
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.addEventListener("click", sortOne);

  const sortAllBtn = document.createElement("button");
  sortAllBtn.type = "button";
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.addEventListener("click", sortAll);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = Number(input.value);
    if (isNaN(n)) return;
    addNumber(n);
    input.value = "";
  });

  label.appendChild(input);
  form.appendChild(label);
  form.appendChild(addBtn);
  form.appendChild(sortOneBtn);
  form.appendChild(sortAllBtn);

  return form;
}

//copy the app div from HTML
//clear the last render
//add the title and number lists
function render() {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  app.appendChild(Title());
  app.appendChild(InputForm());
  app.appendChild(NumberList("Bank", bank));
  app.appendChild(NumberList("Odds", odds));
  app.appendChild(NumberList("Evens", evens));
}
render();
//took me a while to realize why render has to be outside the function here
