
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        
        if (currentPage.includes(link.getAttribute('href').replace('./', '').replace('../', ''))) {
            link.classList.add('active');
        }
        
        
        if ((currentPage.endsWith('/') || currentPage.endsWith('index.html')) && link.getAttribute('href') === './') {
            link.classList.add('active');
        }
    });
});


const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.closest('.dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});
