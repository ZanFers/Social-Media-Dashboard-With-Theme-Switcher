//Look for a more efficient solution, too much redundancy!
//Acronyms: dt = dark theme / bg = background
//Background
const bg = document.querySelector(".background");
const bodyBg = document.querySelector("body");
//Miscellaneous
const title = document.querySelector("h1");
const darkMode = document.querySelector(".dark-mode");
const totalNumber = document.querySelector(".total-number");
//Big Tiles
const bigTiles = document.getElementsByClassName("big-tile");
const subTitle = document.querySelectorAll("h2");
const count = document.getElementsByClassName("count");
//Small Tiles
const smallTitle = document.querySelector("h3");
const smallSubTitle = document.querySelectorAll("h4");
const smallTiles = document.getElementsByClassName("small-tile");
const smallCount = document.querySelectorAll(".small-count");
const toggler = document.querySelector("input[name=toggle]");
//Attribution
const att = document.querySelector(".attribution");

toggler.addEventListener("change", function () {
  //Top background
  !bg.classList.contains("dt-bg")
    ? bg.classList.add("dt-bg")
    : bg.classList.remove("dt-bg");

  //Body background
  !bodyBg.classList.contains("dt-body")
    ? bodyBg.classList.add("dt-body")
    : bodyBg.classList.remove("dt-body");

  //Miscellaneous
  !darkMode.classList.contains("dt-count")
    ? darkMode.classList.add("dt-count")
    : darkMode.classList.remove("dt-count");

  !title.classList.contains("dt-numbers")
    ? title.classList.add("dt-numbers")
    : title.classList.remove("dt-numbers");

  !totalNumber.classList.contains("dt-text")
    ? totalNumber.classList.add("dt-text")
    : totalNumber.classList.remove("dt-text");

  //Change the properties of big tile classes
  for (let b = 0; b < bigTiles.length; b++) {
    this.checked
      ? bigTiles[b].classList.add("dt-tile", "dt-hover")
      : bigTiles[b].classList.remove("dt-tile", "dt-hover");
  }

  for (let d = 0; d < subTitle.length; d++) {
    this.checked
      ? subTitle[d].classList.add("dt-text")
      : subTitle[d].classList.remove("dt-text");
  }

  for (let c = 0; c < count.length; c++) {
    this.checked
      ? count[c].classList.add("dt-count")
      : count[c].classList.remove("dt-count");
  }

  //Change the properties of small tile classes
  !smallTitle.classList.contains("dt-numbers")
    ? smallTitle.classList.add("dt-numbers")
    : smallTitle.classList.remove("dt-numbers");

  for (let w = 0; w < smallSubTitle.length; w++) {
    this.checked
      ? smallSubTitle[w].classList.add("dt-text")
      : smallSubTitle[w].classList.remove("dt-text");
  }

  for (let y = 0; y < smallTiles.length; y++) {
    this.checked
      ? smallTiles[y].classList.add("dt-tile", "dt-hover")
      : smallTiles[y].classList.remove("dt-tile", "dt-hover");
  }

  for (let h = 0; h < smallCount.length; h++) {
    this.checked
      ? smallCount[h].classList.add("dt-count")
      : smallCount[h].classList.remove("dt-count");
  }

  //Attribution
  att.style.color == "black" || att.style.color == ""
    ? (att.style.color = "white")
    : (att.style.color = "black");
});
