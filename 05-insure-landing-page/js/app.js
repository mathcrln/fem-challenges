function toggleMenu() {
    var x = document.getElementById("top-menu").firstElementChild;
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
