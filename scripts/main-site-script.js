const mainContainer = document.querySelector("main");
const welcomeContainer = document.querySelector(".welcome-container");
const profileContainer = document.querySelector(".profile-container");
const aboutMeContainer = document.querySelector(".section-about-me");
const contactContainer = document.querySelector(".section-contact");

const aboutMeButton = document.querySelector(".about-me");
const contactButton = document.querySelector(".contact");
const mailButton = document.querySelector(".email");

const profile = document.querySelector(".profile");
const profileArrow = document.querySelector(".arrow");

mainContainer.classList.add("hidden");

aboutMeContainer.classList.add("hidden");
aboutMeContainer.classList.add("position");
contactContainer.classList.add("hidden");
contactContainer.classList.add("position");

document.body.addEventListener("click", function () {
  welcomeContainer.classList.add("scale-down-center");
  mainContainer.classList.remove("hidden");
  mainContainer.classList.add("slide-top");
});

//Containers
const elements = [aboutMeContainer, contactContainer];

function hideElements(elementContainer, allElements){
    element = elementContainer;
    element.classList.toggle("hidden");
    element.classList.toggle("position");
  
  newElements = [...allElements];
  console.log(newElements);

    let elementsToProcess = newElements.filter((el) => el !== element)

  console.log(elementsToProcess);
  for(el of elementsToProcess){
    el.classList.add("hidden");
    el.classList.add("position");
  }
}

profile.addEventListener("click", function () {
  profileContainer.classList.toggle("profile-height");
  profileArrow.style.transform += "rotate(180deg)";
  profileArrow.style.transition = "transform 1s ";
});

aboutMeButton.addEventListener("click", () => {
    hideElements(aboutMeContainer, elements)})
contactButton.addEventListener("click", () => {
    hideElements(contactContainer, elements)})


mailButton.addEventListener("click", (e) => {
  navigator.clipboard.writeText("andrzejzuzanski@gmail.com");
});
