document.addEventListener("DOMContentLoaded", onInit);

function onInit() {
  window.addEventListener("scroll", transicion);

  function transicion() {
    let header = document.querySelector("header");
    header.classList.toggle("transicion", window.scrollY > 90);
  }

  window.addEventListener('scroll', function () {
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



  const images = ['./images/header3.jpg', './images/header2.jpg', './images/header1.jpg'];
  let currentIndex = 0;
  const bannerElement = document.querySelector('.banner');

  function changeBackground() {
    bannerElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 4000);



  const casasData = [
    {
      img: "./images/anuncio1.jpg",
      title: "Casa del lago",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore.",
      price: "US$450000",
      wc: 4,
      estacionamiento: 3,
      dormitorios: 5,
      link: "#"
    },
    {
      img: "./images/anuncio2.jpg",
      title: "Casa moderna",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore.",
      price: "US$350000",
      wc: 2,
      estacionamiento: 1,
      dormitorios: 4,
      link: "#"
    },
    {
      img: "./images/anuncio3.jpg",
      title: "Cabaña de lujo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore.",
      price: "US$400000",
      wc: 2,
      estacionamiento: 2,
      dormitorios: 4,
      link: "#"
    },
    {
      img: "./images/anuncio4.jpg",
      title: "Casa de lujo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore.",
      price: "US$250000",
      wc: 2,
      estacionamiento: 1,
      dormitorios: 3,
      link: "#"
    },
    {
      img: "./images/anuncio5.jpg",
      title: "Casa de lujo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore.",
      price: "US$290000",
      wc: 3,
      estacionamiento: 2,
      dormitorios: 4,
      link: "#"
    },
    {
      img: "./images/anuncio6.jpg",
      title: "Casa de lujo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore.",
      price: "US$300000",
      wc: 3,
      estacionamiento: 1,
      dormitorios: 3,
      link: "#"
    },


  ];

  function createCasaCard(casa) {
    const template = document.getElementById('casa-template').content.cloneNode(true);
    template.querySelector('.card-img-top').src = casa.img;
    template.querySelector('.card-img-top').alt = casa.title;
    template.querySelector('.card-title').textContent = casa.title;
    template.querySelector('.card-text').textContent = casa.description;
    template.querySelector('.text-success').textContent = casa.price;
    template.querySelectorAll('.icono')[0].nextElementSibling.textContent = casa.wc;
    template.querySelectorAll('.icono')[1].nextElementSibling.textContent = casa.estacionamiento;
    template.querySelectorAll('.icono')[2].nextElementSibling.textContent = casa.dormitorios;
    template.querySelector('.btn').href = casa.link;
    return template;
  }

  function loadCasas() {
    const casasContainer = document.getElementById('casas');
    casasData.forEach(casa => {
      const casaCard = createCasaCard(casa);
      casasContainer.appendChild(casaCard);
    });
  }

  loadCasas();
  ocultarCasas();


  const blogsData = [
    {
      img: "./images/blog2.jpg",
      title: "Casa con pileta",
      fecha: "03/07/2024",
      por: "Mariano Alvarez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit dolores reprehenderit repudiandae eum!.",
      link: "#",
    },
    {
      img: "./images/blog3.jpg",
      title: "Living",
      fecha: "17/07/2024",
      por: "Mariano Alvarez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit dolores reprehenderit repudiandae eum!.",
      link: "#",
    },
    {
      img: "./images/blog1.jpg",
      title: "Casa con terraza",
      fecha: "08/09/2024",
      por: "Mariano Alvarez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit dolores reprehenderit repudiandae eum!.",
      link: "#",
    },
    {
      img: "./images/blog4.jpg",
      title: "Dormitorios",
      fecha: "10/09/2024",
      por: "Mariano Alvarez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit dolores reprehenderit repudiandae eum!.",
      link: "#",
    },
    {
      img: "./images/anuncio3.jpg",
      title: "Cabaña con pileta",
      fecha: "28/09/2024",
      por: "Mariano Alvarez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit dolores reprehenderit repudiandae eum!.",
      link: "#",
    },
    {
      img: "./images/anuncio2.jpg",
      title: "Casa con balcon",
      fecha: "27/10/2024",
      por: "Mariano Alvarez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit dolores reprehenderit repudiandae eum!.",
      link: "#",
    },
  ];

  function createBlogCard(blog) {
    const template = document.getElementById('blog-template').content.cloneNode(true);
    template.querySelector('.img-fluid').src = blog.img;
    template.querySelector('.card-title').textContent = blog.title;
    template.querySelector('.card-text').textContent = blog.description;
    template.querySelector('.fecha').textContent = blog.fecha;
    template.querySelector('.por').textContent = blog.por;
    template.querySelector('.card').href = blog.link;
    return template;
  }

  function loadBlogs() {
      const blogContainer = document.getElementById('container-blogs');
      blogsData.forEach(blog => {
        const blogCard = createBlogCard(blog);
        blogContainer.appendChild(blogCard);
      });
  }

  loadBlogs();
  ocultarBlogs();

  const yearElement = document.getElementById('year');

  const year = new Date().getFullYear();
  yearElement.textContent = year;
}

function mostrarMasCasas() {
  const casas = document.querySelectorAll('.col-md-4.mb-4.hidden');
  casas.forEach(casa => {
    casa.classList.remove('hidden');
  });
  document.getElementById("mostrar-mas").style.display = "none";
  document.getElementById("mostrar-menos").style.display = "inline-block";
}

function ocultarCasas() {
  const casas = document.querySelectorAll('.col-md-4.mb-4');
  casas.forEach((casa, index) => {
    if (index >= 3) {
      casa.classList.add('hidden');
    }
  });
  document.getElementById("mostrar-mas").style.display = "inline-block";
  document.getElementById("mostrar-menos").style.display = "none";
}


function mostrarMasBlogs() {
  const blogs = document.querySelectorAll('.card-container.hidden');
  blogs.forEach(blog => {
      blog.classList.remove('hidden');
  });
  document.getElementById("mostrar-mas-blogs").style.display = "none";
  document.getElementById("mostrar-menos-blogs").style.display = "inline-block";
}

function ocultarBlogs() {
  const blogs = document.querySelectorAll('.card-container');
  blogs.forEach((blog, index) => {
      if (index >= 3) {
          blog.classList.add('hidden');
      }
  });
  document.getElementById("mostrar-mas-blogs").style.display = "inline-block";
  document.getElementById("mostrar-menos-blogs").style.display = "none";
}