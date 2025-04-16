document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeLoginModal = loginModal.querySelector('.close');
    const closeRegisterModal = registerModal.querySelector('.close');
    const modalWindow = document.querySelector('.modal');

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
modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
       modalWindow.classList.add('hide');
       modalWindow.classList.remove('show');
       document.body.style.overflow = '';
    }
});
});
window.addEventListener('load', function() {
    var preloader = this.document.getElementById('preloader');
    preloader.style.display = 'none';
});