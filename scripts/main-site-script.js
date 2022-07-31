const mainContainer = document.querySelector('main');
const welcomeContainer = document.querySelector('.welcome-container');
mainContainer.classList.add('hidden');

window.addEventListener('click', function(){
    welcomeContainer.classList.add('scale-down-center');
    mainContainer.classList.remove('hidden');
    mainContainer.classList.add('slide-top');
})