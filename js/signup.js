const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    } else {
        console.log("Element not found ❌");
    }
});


// ===============================

const btn = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar1");
const close = document.getElementById("closeSidebar");

btn.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
};

close.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}