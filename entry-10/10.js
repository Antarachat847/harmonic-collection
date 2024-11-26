
window.addEventListener('scroll', function () {
  const gallery = document.querySelector('.gallery');
  let scrollPosition = window.pageYOffset;
  gallery.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax scroll effect
});
