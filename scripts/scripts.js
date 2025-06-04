document.addEventListener("DOMContentLoaded", function () {
  //МОДАЛЬНЫЕ ОКНА 
  var loginModal = document.getElementById("loginModal");
  var registerModal = document.getElementById("registerModal");

  var btnLogin = document.getElementById("Login"); 
  var btnRegister = document.getElementById("SignUp"); 

  var loginForm = document.getElementById("loginForm");
  var closeLogin = loginModal ? loginModal.querySelector(".close") : null;

  var registerForm = document.getElementById("registerForm");
  var closeRegister = registerModal ? registerModal.querySelector(".close") : null;

  if (btnLogin) {
    btnLogin.addEventListener("click", function (event) {
      event.preventDefault();
      if (loginModal) {
        loginModal.style.display = "block";
      }
    });
  }

  if (btnRegister) {
    btnRegister.addEventListener("click", function (event) {
      event.preventDefault();
      if (registerModal) {
        registerModal.style.display = "block";
      }
    });
  }

  if (closeLogin) {
    closeLogin.addEventListener("click", function () {
      if (loginModal) {
        loginModal.style.display = "none";
      }
    });
  }

  if (closeRegister) {
    closeRegister.addEventListener("click", function () {
      if (registerModal) {
        registerModal.style.display = "none";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Вход выполнен успешно!");
      if (loginModal) {
        loginModal.style.display = "none";
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Регистрация успешно выполнена!");
      if (registerModal) {
        registerModal.style.display = "none";
      }
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
    if (event.target === registerModal) {
      registerModal.style.display = "none";
    }
  });


  //СЛАЙДЕР 
  var slides = document.querySelectorAll(".hero-image");
  var currentSlide = 0;
  var totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === index);
    });
  }

  if (totalSlides > 0) {
    showSlide(currentSlide);
    setInterval(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 3000);
  }

  function updateImage(src) {
    var imageElement = document.getElementById("infImage");
    if (imageElement) {
      imageElement.src = src;
    } else {
      console.error('Элемент с id "infImage" не найден.');
    }
  }
  window.updateImage = updateImage;


  //ГЕНЕРАЦИЯ КАРТОЧЕК 
  function generateCards(cards) {
    var featureContainer = document.getElementById("features-container");
    if (!featureContainer) {
      console.error('Элемент с id "features-container" не найден');
      return;
    }

    cards.forEach(function (card) {
      var cardHTML = `
        <div class="feature" onclick="updateImage('${card.image || "img/Frame 1625.jpg"}')">
          <hr class="thick-line">
          <h3>${card.card_name}</h3>
          <p>${card.card_text}</p>
        </div>`;
      featureContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
  }

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var cards = json.map(function (post, index) {
        return {
          card_name: "Professional Profile " + (index + 1),
          card_text: post.body,
          image: "img/Frame 1625.jpg" 
        };
      });
      generateCards(cards);
    })
    .catch(function (error) {
      console.error("Ошибка при загрузке карточек:", error);
    });
});

//ПРЕЛОДЕР
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(function() {
      preloader.style.display = "none";
    }, 1500);
  }
});