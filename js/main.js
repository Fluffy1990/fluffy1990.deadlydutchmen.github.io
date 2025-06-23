
window.addEventListener('scroll', function() {
  document.querySelectorAll('.parallax').forEach(function(el) {
    let speed = 0.3;
    el.style.backgroundPositionY = -(window.scrollY * speed) + "px";
  });
});
