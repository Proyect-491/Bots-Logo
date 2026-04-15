const puntosTOS = [
    { t: "1. No Reembolso", d: "Ventas finales por naturaleza digital." },
    { t: "2. Bots Discord", d: "Incluye configuración inicial acordada." },
    { t: "3. Scripts FiveM", d: "Funcionamiento garantizado en base limpia. Únicos y optimizados." },
    { t: "4. Ropa FiveM", d: "Requiere slots de Patreon activos por parte del cliente." },
    { t: "5. Soporte", d: "Instalación básica incluida por 30 días." },
    { t: "6. Hosting", d: "24h de gracia tras vencimiento, luego borrado." },
    { t: "7. Prohibición de Leaks", d: "Revocación de licencia y baneo global ante filtraciones." },
    { t: "8. Ingeniería Inversa", d: "Prohibido descompilar o intentar descifrar el código." },
    { t: "9. Responsabilidad Legal", d: "El cliente responde por el uso que le dé al software." },
    { t: "10. Actualizaciones", d: "Versiones futuras pueden conllevar costes adicionales." },
    // ... añade aquí el resumen de los otros puntos hasta completar los 34
    { t: "34. Idioma", d: "Soporte oficial exclusivamente en Español." }
];

const content = document.getElementById('tos-content');

puntosTOS.forEach(punto => {
    const div = document.createElement('div');
    div.className = 'tos-point';
    div.innerHTML = `<h4>${punto.t}</h4><p>${punto.d}</p>`;
    content.appendChild(div);
});

// Efecto de aparición suave al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease-out";
    observer.observe(card);
});
