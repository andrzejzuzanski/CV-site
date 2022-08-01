const mainContainer = document.querySelector("main");
const welcomeContainer = document.querySelector(".welcome-container");
mainContainer.classList.add("hidden");

document.body.addEventListener("click", function () {
  welcomeContainer.classList.add("scale-down-center");
  mainContainer.classList.remove("hidden");
  mainContainer.classList.add("slide-top");
});

const profile = document.querySelector(".profile");
const profileContainer = document.querySelector(".profile-container");
const profileArrow = document.querySelector(".arrow");

profile.addEventListener("click", function () {
    profileContainer.classList.toggle("profile-height");
    profileArrow.style.transform += "rotate(180deg)";
    profileArrow.style.transition = "transform 1s ";
});  
