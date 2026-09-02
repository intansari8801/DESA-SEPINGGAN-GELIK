// =====================================
// MENU MOBILE
// =====================================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("show");

        }
    );

}


// =====================================
// TUTUP MENU SETELAH LINK DIKLIK
// =====================================

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            if (navMenu) {

                navMenu.classList.remove("show");

            }

        }
    );

});


// =====================================
// TAHUN OTOMATIS
// =====================================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
