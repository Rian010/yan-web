const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Menentukan posisi tombol
var whatsAppButton = document.querySelector("#whatsapp-button");
var whatsAppButtonPos = whatsAppButton.getBoundingClientRect().top;

// Menambahkan class "fixed" pada tombol saat halaman scroll ke bawah
window.onscroll = function() {
    if (window.pageYOffset > whatsAppButtonPos) {
        whatsAppButton.classList.add("fixed");
    } else {
        whatsAppButton.classList.remove("fixed");
    }
};

