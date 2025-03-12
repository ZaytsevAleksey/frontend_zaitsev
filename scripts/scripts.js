document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('Login');
    const registerBtn = document.getElementById('SignUp');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeLoginModal = loginModal.querySelector('.close');
    const closeRegisterModal = registerModal.querySelector('.close');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;


Login.addEventListener('click', function() {
    loginModal.style.display = "block";
});
SignUp.addEventListener('click', function() {
    registerModal.style.display = "block";
});
closeLoginModal.addEventListener('click', function() {
    loginModal.style.display = "none";
});
closeRegisterModal.addEventListener('click', function() {
    registerModal.style.display = "none";
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlider();
});
nextButton.addEventListener('click', function() {
     currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});
});
window.addEventListener('load', function() {
    var preloader = this.document.getElementById('preloader');
    preloader.style.display = 'none';
});