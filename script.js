(function() {
  const btn = document.getElementById('scrollTopBtn');

  // Показать кнопку, когда прокрутка больше чем N px
  const toggleButtonVisibility = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 300) { // можно настроить порог
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  };

  // При нажатии прокручиваем наверх
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Отслеживаем прокрутку
  window.addEventListener('scroll', toggleButtonVisibility, { passive: true });

  // Инициализация при загрузке
  toggleButtonVisibility();
})();
