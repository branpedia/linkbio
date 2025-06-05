// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Hide loading screen after 1 second
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// Initialize page
function initializePage() {
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
    }
}

// Set up event listeners
function setupEventListeners() {
    // Nav toggle for mobile
    document.getElementById('navToggle').addEventListener('click', function() {
        document.getElementById('navMenu').classList.toggle('active');
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Home link (optional, prevents default behavior)
    document.querySelector('.nav-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    });
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
}
