// Before & After slider
const handle = document.getElementById('sliderHandle');
const afterImg = document.getElementById('afterImg');

handle.addEventListener('mousedown', function (e) {
  document.onmousemove = function (e) {
    let rect = handle.parentElement.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let width = rect.width;
    let percent = Math.max(0, Math.min(offsetX / width, 1)) * 100;
    handle.style.left = percent + '%';
    afterImg.style.clipPath = inset( 100 %percent);
  };
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;
function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 3000);

showTestimonial(current);