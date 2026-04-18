fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


// -----------------------------------------------------------------------

const buttons = document.querySelectorAll('.container-name button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();

        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});

//--------------------------------------------------------------
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