/* 
    Sticky Navbar. Auto hide on scrolldown, show on scrollup
*/
var preScrollpos = window.pageYOffset;
window.onscroll = function() {
    var presentScrollPos = window.pageYOffset;
    if (preScrollpos > presentScrollPos) {
        document.getElementById("navbar").classList.remove('hidden');
    } else {
        document.getElementById("navbar").classList.add('hidden');
    }
    preScrollpos = presentScrollPos;
}
/*
    Penjelasan Feature: Feature ini membuat navbar hilang saat scroll ke bawah dan muncul saat scroll ke atas 
*/