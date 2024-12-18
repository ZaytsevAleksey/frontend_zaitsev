document.addEventListener('DOMContentLoaded', function() {

    const loginBtn = document.getElementById('Login');
    const registerBtn = document.getElementById('SignUp');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeLoginModal = loginModal.querySelector('.close');
    const closeRegisterModal = registerModal.querySelector('.close');

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

window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
  })
});