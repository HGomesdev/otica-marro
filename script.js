document.addEventListener("DOMContentLoaded", () => {
    
    // Controle da Navbar ao Scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) { navbar.classList.add("nav-scrolled"); }
        else { navbar.classList.remove("nav-scrolled"); }
    });

    // Lógica do Menu Mobile (Corrigida para toggle funcional)
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Abrir e fechar ao clicar no botão Hamburguer/X
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("toggle");
    });

    // Fechar ao clicar em um link (navegação)
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileMenu.classList.remove("toggle");
        });
    });

    // Intersection Observer para Animações Reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});