let index = 0;

function mostrarSlide() {
  const slides = document.querySelectorAll(".slider img");
  
  // Ocultar todos los slides
  slides.forEach(slide => {
    slide.classList.remove("activo");
  });

  // Mostrar el slide actual
  slides[index].classList.add("activo");

  // Pasar al siguiente slide
  index = (index + 1) % slides.length;
}

// Iniciar el slider automático
setInterval(mostrarSlide, 3000); // Cambia cada 3 segundos
