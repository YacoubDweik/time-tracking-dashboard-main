let titles = document.querySelectorAll(".title");
let currentHours = document.querySelectorAll(".current");
let previousHours = document.querySelectorAll(".previous");
let typeParent = document.querySelector(".main__body");
let types = document.querySelectorAll(".main__body span");

fetch("./data.json")
  .then((data) => {
    return data.json();
  })
  .then((data) => handleFetch(data));

let handleFetch = (data) => {
  let max = data.length;
  for (let i = 0; i < max; i++) {
    titles[i].innerHTML = data[i]["title"];
  }
  let chosenType =
    document.querySelector(".active").classList[0];
  for (i = 0; i < max; i++) {
    currentHours[i].innerHTML =
      data[i]["timeframes"][chosenType]["current"] + "hrs";
    previousHours[i].innerHTML =
      "Last Week - " +
      data[i]["timeframes"][chosenType]["previous"] +
      "hrs";
  }
  typeParent.addEventListener("click", (e) => {
    types.forEach((type) => {
      if (e.target == type) {
        types.forEach((type) =>
          type.classList.remove("active")
        );
        type.classList.add("active");
        chosenType =
          document.querySelector(".active").classList[0];
        for (i = 0; i < max; i++) {
          currentHours[i].innerHTML =
            data[i]["timeframes"][chosenType]["current"] +
            "hrs";
          previousHours[i].innerHTML =
            "Last Week - " +
            data[i]["timeframes"][chosenType]["previous"] +
            "hrs";
        }
      }
    });
  });
};
