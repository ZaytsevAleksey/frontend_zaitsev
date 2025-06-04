// Опишем структуры данных
interface Card {
  card_name: string;
  card_text: string;
  image: string;
}

interface Post {
  body: string;
}

// Чтобы повесить функцию на window
declare global {
  interface Window {
    updateImage: (src: string) => void;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Модальные окна
  const loginModal = document.getElementById('loginModal') as HTMLElement | null;
  const registerModal = document.getElementById('registerModal') as HTMLElement | null;

  const btnLogin = document.getElementById('Login');
  const btnRegister = document.getElementById('SignUp');

  const loginForm = document.getElementById('loginForm') as HTMLFormElement | null;
  const closeLogin = loginModal?.querySelector<HTMLElement>('.close') ?? null;

  const registerForm = document.getElementById('registerForm') as HTMLFormElement | null;
  const closeRegister = registerModal?.querySelector<HTMLElement>('.close') ?? null;

  if (btnLogin) {
    btnLogin.addEventListener('click', (e) => {
      e.preventDefault();
      if (loginModal) loginModal.style.display = 'block';
    });
  }

  if (btnRegister) {
    btnRegister.addEventListener('click', (e) => {
      e.preventDefault();
      if (registerModal) registerModal.style.display = 'block';
    });
  }

  closeLogin?.addEventListener('click', () => {
    if (loginModal) loginModal.style.display = 'none';
  });

  closeRegister?.addEventListener('click', () => {
    if (registerModal) registerModal.style.display = 'none';
  });

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Вход выполнен успешно!');
    if (loginModal) loginModal.style.display = 'none';
  });

  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Регистрация успешно выполнена!');
    if (registerModal) registerModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal!.style.display = 'none';
    if (e.target === registerModal) registerModal!.style.display = 'none';
  });

  // Слайдер
  const slides = Array.from(document.querySelectorAll<HTMLElement>('.hero-image'));
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index: number): void {
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
  function updateImage(src: string): void {
    const imageElement = document.getElementById('infImage') as HTMLImageElement | null;
    if (imageElement) {
      imageElement.src = src;
    } else {
      console.error('Элемент с id "infImage" не найден.');
    }
  }
  // Экспортим в глобальную область
  window.updateImage = updateImage;

  // Генерация карточек
  function generateCards(cards: Card[]): void {
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
    .then((res) => res.json() as Promise<Post[]>)
    .then((posts) => {
      const cards: Card[] = posts.map((post, i) => ({
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
  const preloader = document.getElementById('preloader') as HTMLElement | null;
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1500);
  }
});
export {};