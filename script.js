const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.replace('light-mode', 'dark-mode');
}

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    }
});