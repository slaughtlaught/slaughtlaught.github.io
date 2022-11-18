window.onscroll = function() {scrollfunction()};

let navbar = document.getElementById("navbar");

function scrollfunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-50px';
    }
}