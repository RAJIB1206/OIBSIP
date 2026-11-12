
// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const recipient = "yourmail@gmail.com";

    const subject = encodeURIComponent("Portfolio Contact Message");
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
});
