var navbar = document.getElementById("navbar");
var menuButton = document.createElement("div");
menuButton.classList.add("menu-button");
menuButton.innerHTML = "&#9776;";
document.body.appendChild(menuButton);

var menuOpen = false; // Menambahkan variabel untuk melacak status tombol menu

menuButton.addEventListener("click", function () {
    var navbarUl = navbar.querySelector("ul");
    navbarUl.classList.toggle("show");
    
    // Mengganti ikon tombol menu
    if (menuOpen) {
        menuButton.innerHTML = "&#9776;";
    } else {
        menuButton.innerHTML = "&#10006;";
    }
    
    menuOpen = !menuOpen; // Mengganti status tombol menu
});

// Tambahkan event listener untuk menutup ul saat salah satu link diklik
var navbarLinks = navbar.querySelectorAll("ul li a");
navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        var navbarUl = navbar.querySelector("ul");
        navbarUl.classList.remove("show");
        menuButton.innerHTML = "&#9776;"; // Mengembalikan ikon tombol menu ke awal
        menuOpen = false; // Mengembalikan status tombol menu ke awal
    });
});