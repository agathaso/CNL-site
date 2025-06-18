<script>
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carrossel-slide');
  const dots = document.querySelectorAll('.carrossel-dots .dot');
  const prevBtn = document.querySelector('.carrossel-btn.prev');
  const nextBtn = document.querySelector('.carrossel-btn.next');
  let current = 0;

  if (slides.length === 0 || dots.length === 0 || !prevBtn || !nextBtn) {
    console.warn("Carrossel: elementos não encontrados.");
    return;
  }

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === idx);
      dots[i].classList.toggle('ativo', i === idx);
    });
    current = idx;
  }

  prevBtn.onclick = () => {
    showSlide((current - 1 + slides.length) % slides.length);
  };

  nextBtn.onclick = () => {
    showSlide((current + 1) % slides.length);
  };

  dots.forEach((dot, i) => {
    dot.onclick = () => showSlide(i);
  });

  // Inicializa o primeiro slide
  showSlide(0);
});
</script>