
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