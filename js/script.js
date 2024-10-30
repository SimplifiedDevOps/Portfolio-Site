// ScrollReveal animations
ScrollReveal().reveal('.home-content, .about-content, .projects-container', { 
    interval: 200, 
    reset: true 
});

// Typed.js for dynamic text in the home section
var typed = new Typed('.multiple-text', {
    strings: ["Data Scientist", "AI Enthusiast", "ML Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
