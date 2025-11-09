document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting Spiral!");
});
const toggle = document.getElementById('theme-toggle');
let night = false;

toggle.addEventListener('click', () => {
  document.documentElement.style.setProperty('--bg-color', night ? '#0f0f0f' : '#000000');
  document.documentElement.style.setProperty('--text-color', night ? '#39ff14' : '#00ffcc');
  toggle.textContent = night ? 'Switch to Night Ops' : 'Switch to Day Shift';
  night = !night;
});