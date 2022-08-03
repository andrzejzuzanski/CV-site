const mainContainer = document.querySelector("main");
const welcomeContainer = document.querySelector(".welcome-container");
const profileContainer = document.querySelector(".profile-container");
const aboutMeContainer = document.querySelector(".section-about-me");
const contactContainer = document.querySelector(".section-contact");
const htmlContainer = document.querySelector(".section-html");
const cssContainer = document.querySelector(".section-css");
const jsContainer = document.querySelector(".section-js");
const jqueryContainer = document.querySelector(".section-jquery");
const reactContainer = document.querySelector(".section-react");

const aboutMeButton = document.querySelector(".about-me");
const contactButton = document.querySelector(".contact");
const mailButton = document.querySelector(".email");
const htmlButton = document.querySelector(".html-button");
const cssButton = document.querySelector(".css-button");
const jsButton = document.querySelector(".js-button");
const jqueryButton = document.querySelector(".jquery-button");
const reactButton = document.querySelector(".react-button");

const profile = document.querySelector(".profile");
const profileArrow = document.querySelector(".arrow");

mainContainer.classList.add("hidden");

aboutMeContainer.classList.add("hidden");
aboutMeContainer.classList.add("position");
contactContainer.classList.add("hidden");
contactContainer.classList.add("position");
htmlContainer.classList.add("hidden");
htmlContainer.classList.add("position");
cssContainer.classList.add("hidden");
cssContainer.classList.add("position");
jsContainer.classList.add("hidden");
jsContainer.classList.add("position");
jqueryContainer.classList.add("hidden");
jqueryContainer.classList.add("position");
reactContainer.classList.add("hidden");
reactContainer.classList.add("position");

document.body.addEventListener("click", function () {
  welcomeContainer.classList.add("scale-down-center");
  mainContainer.classList.remove("hidden");
  mainContainer.classList.add("slide-top");
});

//Containers
const elements = [
  aboutMeContainer,
  contactContainer,
  htmlContainer,
  cssContainer,
  jsContainer,
  jqueryContainer,
  reactContainer,
];

function hideElements(elementContainer, allElements) {
  element = elementContainer;
  element.classList.toggle("hidden");
  element.classList.toggle("position");
  newElements = [...allElements];
  let elementsToProcess = newElements.filter((el) => el !== element);
  for (el of elementsToProcess) {
    el.classList.add("hidden");
    el.classList.add("position");
  }
}

profile.addEventListener("click", function () {
  profileContainer.classList.toggle("profile-height");
  profileArrow.style.transform += "rotate(180deg)";
  profileArrow.style.transition = "transform 1s ";
});

aboutMeButton.addEventListener("click", () =>hideElements(aboutMeContainer, elements));
contactButton.addEventListener("click", () =>hideElements(contactContainer, elements));
htmlButton.addEventListener("click", () =>hideElements(htmlContainer, elements));
cssButton.addEventListener("click", () => hideElements(cssContainer, elements));
jsButton.addEventListener("click", () => hideElements(jsContainer, elements));
jqueryButton.addEventListener("click", () => hideElements(jqueryContainer, elements));
reactButton.addEventListener("click", () => hideElements(reactContainer, elements));


mailButton.addEventListener("click", (e) => {
  navigator.clipboard.writeText("andrzejzuzanski@gmail.com");
});
