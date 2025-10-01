// Toggle para el menú hamburguesa en móviles
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger-menu');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

// Menú sticky (se mantiene fijo al hacer scroll)
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) { // Cuando el scroll es mayor de 50px
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Animación de aparición de tarjetas de plantas al hacer scroll
const plantCards = document.querySelectorAll('.plant-card');

const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px',
    threshold: 0.2 // Cuando el 20% del elemento es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Dejar de observar una vez que ha aparecido
        }
    });
}, observerOptions);

plantCards.forEach(card => {
    observer.observe(card);
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Cerrar menú hamburguesa si está abierto después de hacer clic
        const navLinks = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger-menu');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});