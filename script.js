// 🌐 Contact Form Confirmation
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for contacting Spiral!");
  });
}

// 🌗 Theme Toggle Logic with Memory
const toggle = document.getElementById('theme-toggle');
let night = false;

// Load saved theme
const savedTheme = localStorage.getItem('spiral-theme');
if (savedTheme === 'night') {
  document.documentElement.style.setProperty('--bg-color', '#000000');
  document.documentElement.style.setProperty('--text-color', '#00ffcc');
  if (toggle) toggle.textContent = 'Switch to Day Shift';
  night = true;
}

if (toggle) {
  toggle.addEventListener('click', () => {
    document.documentElement.style.setProperty('--bg-color', night ? '#0f0f0f' : '#000000');
    document.documentElement.style.setProperty('--text-color', night ? '#39ff14' : '#00ffcc');
    toggle.textContent = night ? 'Switch to Night Ops' : 'Switch to Day Shift';
    localStorage.setItem('spiral-theme', night ? 'day' : 'night');
    night = !night;
  });
}

// 🗂️ Category Filter Logic
const categoryFilter = document.getElementById('category-filter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', function () {
    const selected = this.value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const category = product.getAttribute('data-category');
      product.style.display = (selected === 'all' || category === selected) ? 'block' : 'none';
    });
  });
}

// 🔍 Live Search Bar Logic
const searchBar = document.getElementById('search-bar');
if (searchBar) {
  searchBar.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const text = product.textContent.toLowerCase();
      product.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}