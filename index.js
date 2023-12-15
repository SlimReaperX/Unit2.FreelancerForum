const root = document.getElementById("root");

const data = [
  {
    name: "Morticia",
    price: 59.99,
    occupation: "Mortician",
  },
  {
    name: "Elvira",
    price: 39.99,
    occupation: "Ghost-Hunter",
  },
  {
    name: "Vampira",
    price: 89.99,
    occupation: "Surgeon",
  },
  {
    name: "Lilly-Munster",
    price: 109.99,
    occupation: "Interior-Designer",
  },
];

// data.forEach((itm) => {
const element = document.createElement("div");
element.classList.add("ad");

const title = document.createElement("h1");
title.innerHTML = "Freelance Forum";

const subtext = document.createElement("h2");
subtext.innerHTML = "Available Freelancers:";

// const avg = document.createElement("p");
// avg.innerHTML = `The average starting price is: $${getAvg(data)}.`;

element.appendChild(title);

element.appendChild(subtext);

// element.appendChild(avg);

data.forEach((itm) => {
  const entries = document.createElement("h3");
  entries.innerHTML = `${itm.name} ${itm.occupation} ${itm.price}/Hr`;

  // element.appendChild(title);
  // element.appendChild(avail);
  element.appendChild(entries);
  root.appendChild(element);
});

function getLength(data) {
  let getLength = data.price.length;
  return getLength;
}

const getSum = (data) => {
  let sum = 0;
  for (let i = 0; i < data.price.length; i++) {
    let currentNumber = numbers[i];
    sum = sum + currentNumber;
  }
  return sum;
};

const getAvg = (price) => {
  let getAvg = getSum(price) / getLength(price);
  return getAvg;
};

// Made a new set of arrays, and a new obj array. Trying to turn it into a random string using interpolation.

// const maxData = 4;

// const names = ["Gyarados", "Snorlax", "Eevee", "Squirtle"];

// const prices = [39.99, 19.99, 119.99, 59.99];

// const occupations = [
//   "Swim Instructor",
//   "Sleep Tech",
//   "Cosmetologist",
//   "Surfer",
// ];

// const newJobs = [
//   {
//     name: "Gyarados",
//     price: 39.99,
//     occupation: "Swim Instructor",
//   },
//   {
//     name: "Snorlax",
//     price: 19.99,
//     occupation: "Sleep Tech",
//   },
//   {
//     name: "Eevee",
//     price: 119.99,
//     occupation: "Cosmetologist",
//   },
//   {
//     name: "Squirtle",
//     price: 59.99,
//     occupation: "Surfer",
//   },
// ];

// const addJobIntervalId = setInterval(addJob, 2000);

// function render() {
// const freelanceEntries = newJobs.map((itm) =>{

// })
// }

// function addEntry() {
//   const name = names[Math.floor(Math.random() * names.length)];
//   const price = prices[Math.floor(Math.random() * prices.length)];
//   const occupation =
//     occupations[Math.floor(Math.random() * occupations.length)];

//   newJobs.push({ name, price, occupation });
//   if (newJobs.length >= maxData) {
//     clearInterval(addJobIntervalId);
//   }
//   render();
// }
