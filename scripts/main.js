define("script", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.addEventListener('DOMContentLoaded', () => {
        var _a, _b;
        // Модальные окна
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const btnLogin = document.getElementById('Login');
        const btnRegister = document.getElementById('SignUp');
        const loginForm = document.getElementById('loginForm');
        const closeLogin = (_a = loginModal === null || loginModal === void 0 ? void 0 : loginModal.querySelector('.close')) !== null && _a !== void 0 ? _a : null;
        const registerForm = document.getElementById('registerForm');
        const closeRegister = (_b = registerModal === null || registerModal === void 0 ? void 0 : registerModal.querySelector('.close')) !== null && _b !== void 0 ? _b : null;
        if (btnLogin) {
            btnLogin.addEventListener('click', (e) => {
                e.preventDefault();
                if (loginModal)
                    loginModal.style.display = 'block';
            });
        }
        if (btnRegister) {
            btnRegister.addEventListener('click', (e) => {
                e.preventDefault();
                if (registerModal)
                    registerModal.style.display = 'block';
            });
        }
        closeLogin === null || closeLogin === void 0 ? void 0 : closeLogin.addEventListener('click', () => {
            if (loginModal)
                loginModal.style.display = 'none';
        });
        closeRegister === null || closeRegister === void 0 ? void 0 : closeRegister.addEventListener('click', () => {
            if (registerModal)
                registerModal.style.display = 'none';
        });
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Вход выполнен успешно!');
            if (loginModal)
                loginModal.style.display = 'none';
        });
        registerForm === null || registerForm === void 0 ? void 0 : registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Регистрация успешно выполнена!');
            if (registerModal)
                registerModal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === loginModal)
                loginModal.style.display = 'none';
            if (e.target === registerModal)
                registerModal.style.display = 'none';
        });
        // Слайдер
        const slides = Array.from(document.querySelectorAll('.hero-image'));
        let currentSlide = 0;
        const totalSlides = slides.length;
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }
        if (totalSlides > 0) {
            showSlide(currentSlide);
            setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, 3000);
        }
        // Функция для изменения картинки
        function updateImage(src) {
            const imageElement = document.getElementById('infImage');
            if (imageElement) {
                imageElement.src = src;
            }
            else {
                console.error('Элемент с id "infImage" не найден.');
            }
        }
        // Экспортим в глобальную область
        window.updateImage = updateImage;
        // Генерация карточек
        function generateCards(cards) {
            const featureContainer = document.getElementById('features-container');
            if (!featureContainer) {
                console.error('Элемент с id "features-container" не найден');
                return;
            }
            cards.forEach((card) => {
                const cardHTML = `
        <div class="feature" onclick="updateImage('${card.image}')">
          <hr class="thick-line">
          <h3>${card.card_name}</h3>
          <p>${card.card_text}</p>
        </div>`;
                featureContainer.insertAdjacentHTML('beforeend', cardHTML);
            });
        }
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then((res) => res.json())
            .then((posts) => {
            const cards = posts.map((post, i) => ({
                card_name: `Professional Profile ${i + 1}`,
                card_text: post.body,
                image: 'img/Frame 1625.jpg'
            }));
            generateCards(cards);
        })
            .catch((err) => console.error('Ошибка при загрузке карточек:', err));
    });
    // Прелоадер
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1500);
        }
    });
});
//# sourceMappingURL=main.js.map