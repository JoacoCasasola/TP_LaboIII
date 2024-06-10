
window.addEventListener("scroll", transicion);

function transicion() {
  let header = document.querySelector("header");
  header.classList.toggle("transicion", window.scrollY > 90);
}

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const redesSociales = document.querySelector('.redes');
    const up = document.querySelector('.up');
    const menuVertical = document.getElementById('menu-vertical');

    if (scrollPosition >= 150) {
        redesSociales.style.opacity = '1';
        up.style.opacity = '1';
        menuVertical.classList.remove('scrolled');
    } else {
        redesSociales.style.opacity = '0';
        up.style.opacity = '0';
        menuVertical.classList.add('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = ['./images/header3.jpg', './images/header2.jpg', './images/header1.jpg'];
  let currentIndex = 0;
  const bannerElement = document.querySelector('.banner');

  function changeBackground() {
    bannerElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 4000);
});

function mostrarMasCasas() {
  document.getElementById("casas2").style.display = "flex";
  document.getElementById("mostrar-mas").style.display = "none";
  document.getElementById("mostrar-menos").style.display = "flex";
}
function ocultarCasas() {
  document.getElementById("casas2").style.display = "none";
  document.getElementById("mostrar-menos").style.display = "none";
  document.getElementById("mostrar-mas").style.display = "flex";
}