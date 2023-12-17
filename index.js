const title = document.createElement("h1");
title.innerHTML = "Available Freelencers";
root.classList.add("title");
root.appendChild(title);

const data = [
  {
    name: "Elvira",
    price: "$50",
    job: "Ghost-hunter",
  },

  {
    name: "Vampira",
    price: "$60",
    job: "Surgeon",
  },

  {
    name: "Morticia",
    price: "$70",
    job: "Mortician",
  },
];
data.forEach((itm) => {
  const element = document.createElement("div");
  element.classList.add("freelancers");
  const name = document.createElement("h1");
  name.innerHTML = itm.name;
  const price = document.createElement("h2");
  price.innerHTML = itm.price;
  const job = document.createElement("h2");
  job.innerHTML = itm.job;
  element.appendChild(name);
  element.appendChild(price);
  element.appendChild(job);
  root.appendChild(element);
});
