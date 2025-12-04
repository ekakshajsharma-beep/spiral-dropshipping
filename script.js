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

// 🌌 Image Upload Preview Logic with Persistence
const imageInput = document.getElementById('image-upload');
const previewImg = document.getElementById('image-preview');
const previewContainer = document.getElementById('preview-container');

if (imageInput && previewImg && previewContainer) {
  imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageData = e.target.result;
        previewImg.src = imageData;
        previewImg.style.display = 'block';
        previewContainer.querySelector('p').style.display = 'none';

        // Save image to localStorage
        localStorage.setItem('spiralImage', imageData);
      };
      reader.readAsDataURL(file);
    } else {
      previewImg.src = '';
      previewImg.style.display = 'none';
      previewContainer.querySelector('p').textContent = 'Invalid file type';
      previewContainer.querySelector('p').style.display = 'block';
    }
  });

  // Load saved image on page refresh
  window.addEventListener('DOMContentLoaded', function () {
    const savedImage = localStorage.getItem('spiralImage');
    if (savedImage) {
      previewImg.src = savedImage;
      previewImg.style.display = 'block';
      previewContainer.querySelector('p').style.display = 'none';
    }
  });
}