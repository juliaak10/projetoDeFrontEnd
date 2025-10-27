document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const btnProximo = document.querySelector(".proximo");
  const btnAnterior = document.querySelector(".anterior");

  if (!slides.length || !btnProximo || !btnAnterior) {
    console.error("Carrossel: elementos não encontrados!");
    return;
  }

  const total = slides.length;
  const porPagina = 2;
  let indice = 0;

  function atualizarSlides() {
    slides.forEach((slide, i) => {
      slide.style.display = (i >= indice && i < indice + porPagina) ? "flex" : "none";
    });
  }

  btnProximo.addEventListener("click", () => {
    indice += porPagina;
    if (indice >= total) indice = 0;
    atualizarSlides();
  });

  btnAnterior.addEventListener("click", () => {
    indice -= porPagina;
    if (indice < 0) indice = Math.max(0, total - porPagina);
    atualizarSlides();
  });

  atualizarSlides();
});