const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
  }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);


const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});


// Function for sorting by name
const sortByRate = (parkA, parkB) => {
  const parkARate = parkA.querySelector(".rating-display.stat .value").innerText;
  const parkBRate = parkB.querySelector(".rating-display.stat .value").innerText;
  if (parkARate < parkBRate) {
    return -1;
  } else if (parkARate > parkB) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `rateSorter` click
const rateSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");
  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main
  main.innerHTML = "";
  // 4. Create an array
  const parksArray = Array.from(parksList);
  // 5. Sort the array
  parksArray.sort(sortByRate);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `rateSorter` link
const rateSorter = document.querySelector("#rate-sorter");

// Add an event listener
rateSorter.addEventListener("click", rateSorterClickHandler);