// Order button click
const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Order feature coming soon!');
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
