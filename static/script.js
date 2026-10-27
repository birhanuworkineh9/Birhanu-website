
"use strict";

// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {
    menuBtn.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu when a navigation link is selected
    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation");
            menuBtn.textContent = "☰";
        });
    });
}

// Automatically display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smooth navigation to website sections
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

console.log("Birhanu Smart Website loaded successfully.");
