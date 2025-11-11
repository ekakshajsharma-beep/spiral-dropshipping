// 🌐 Contact Form Confirmation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting Spiral!");
});

// 🌗 Theme Toggle Logic
const toggle = document.getElementById('theme-toggle');
let night = false;

toggle.addEventListener('click', () => {
  document.documentElement.style.setProperty('--bg-color', night ? '#0f0f0f' : '#000000');
  document.documentElement.style.setProperty('--text-color', night ? '#39ff14' : '#00ffcc');
  toggle.textContent = night ? 'Switch to Night Ops' : 'Switch to Day Shift';
  night = !night;
});

// 🗂️ Category Filter Logic
document.getElementById('category-filter').addEventListener('change', function () {
  const selected = this.value;
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const category = product.getAttribute('data-category');
    if (selected === 'all' || category === selected) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});