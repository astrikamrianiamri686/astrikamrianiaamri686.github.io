/* =====================================================
   JAVASCRIPT PORTFOLIO ASTRI
   ANIMASI HALAMAN
   CSS TIDAK PERLU DIUBAH
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       1. ANIMASI SAAT HALAMAN BARU DIBUKA
    ================================================= */

    function animasiMasuk(element, delay = 0, arah = "bawah") {

        if (!element) return;

        let posisiAwal;

        if (arah === "kanan") {
            posisiAwal = "translateX(80px)";
        } 
        else if (arah === "kiri") {
            posisiAwal = "translateX(-80px)";
        } 
        else {
            posisiAwal = "translateY(60px)";
        }

        element.animate(
            [
                {
                    opacity: 0,
                    transform: posisiAwal
                },
                {
                    opacity: 1,
                    transform: "translate(0, 0)"
                }
            ],
            {
                duration: 800,
                delay: delay,
                easing: "ease-out",
                fill: "both"
            }
        );
    }


    /* =================================================
       2. ANIMASI JUDUL HALAMAN
    ================================================= */

    const judul = document.querySelector(".judul-halaman");

    if (judul) {
        animasiMasuk(judul, 0, "bawah");
    }


    /* =================================================
       3. ANIMASI HOME
    ================================================= */

    const hero = document.querySelector(".hero");

    if (hero) {

        const kotak = document.querySelector(".kotak-transparan");

        if (kotak) {
            animasiMasuk(kotak, 200, "bawah");
        }

        const fotoHome = document.querySelector(".foto-home");

        if (fotoHome) {
            animasiMasuk(fotoHome, 500, "kanan");
        }

        const headline = document.querySelector(".hero .headline");

        if (headline) {
            animasiMasuk(headline, 700, "kiri");
        }

        const infoHome = document.querySelector(".hero .infotext");

        if (infoHome) {
            animasiMasuk(infoHome, 900, "bawah");
        }

        const tombol = document.querySelector(".tombol");

        if (tombol) {
            animasiMasuk(tombol, 1100, "bawah");
        }
    }


    /* =================================================
       4. ANIMASI CARD DI HOME
    ================================================= */

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card, index) {

        animasiMasuk(
            card,
            300 + (index * 250),
            index % 2 === 0 ? "kiri" : "kanan"
        );

    });


    /* =================================================
       5. ANIMASI BAGIAN ABOUT
    ================================================= */

    const container = document.querySelector(".container");

    if (container) {

        const kiri = document.querySelector("#sidebar-kiri");
        const tengah = document.querySelector(
            "#sidebar-tengah-atau-badan"
        );
        const kanan = document.querySelector("#sidebar-kanan");


        /* KOLOM FOTO / PROFIL */

        if (kiri) {
            animasiMasuk(kiri, 300, "kiri");
        }


        /* PROFIL, HOBI, DAN ISI TENGAH */

        if (tengah) {
            animasiMasuk(tengah, 500, "bawah");
        }


        /* SKILL DAN EDUCATION */

        if (kanan) {
            animasiMasuk(kanan, 700, "kanan");
        }


        /* =================================================
           ANIMASI PROFIL
        ================================================= */

        const boxProfil = document.querySelector(".box");

        if (boxProfil) {
            animasiMasuk(boxProfil, 900, "bawah");
        }


        /* =================================================
           ANIMASI HOBI
        ================================================= */

        const hobi = document.querySelectorAll(".hobi span");

        hobi.forEach(function (item, index) {

            animasiMasuk(
                item,
                1000 + (index * 150),
                "bawah"
            );

        });


        /* =================================================
           ANIMASI SKILL
        ================================================= */

        const skillBox = document.querySelector(".skill-box");

        if (skillBox) {
            animasiMasuk(skillBox, 900, "kanan");
        }


        /* =================================================
           ANIMASI EDUCATION
        ================================================= */

        const education = document.querySelectorAll(
            ".education-item"
        );

        education.forEach(function (item, index) {

            animasiMasuk(
                item,
                1000 + (index * 200),
                "kanan"
            );

        });

    }


    /* =================================================
       6. ANIMASI GALLERY
    ================================================= */

    const gallery = document.querySelectorAll(".gallery");

    gallery.forEach(function (bagian, index) {

        animasiMasuk(
            bagian,
            300 + (index * 400),
            index % 2 === 0 ? "kiri" : "kanan"
        );

    });


    /* =================================================
       ANIMASI FOTO-FOTO GALLERY
    ================================================= */

    const fotoBox = document.querySelectorAll(".foto-box");

    fotoBox.forEach(function (box, index) {

        animasiMasuk(
            box,
            700 + (index * 250),
            "bawah"
        );

    });


    /* =================================================
       FOTO KENANGAN
    ================================================= */

    const fotoKenangan = document.querySelector(
        ".foto-kenangan"
    );

    if (fotoKenangan) {

        animasiMasuk(
            fotoKenangan,
            1000,
            "kanan"
        );

    }


    /* =================================================
       7. ANIMASI CONTACT
    ================================================= */

    const layoutContact = document.querySelector(
        ".layout-dua-kolom"
    );

    if (layoutContact) {

        const leftColumn = document.querySelector(
            ".leftcolumn"
        );

        const rightColumn = document.querySelector(
            ".rightcolumn"
        );


        /* KOLOM KIRI */

        if (leftColumn) {
            animasiMasuk(
                leftColumn,
                300,
                "kiri"
            );
        }


        /* KOLOM KANAN */

        if (rightColumn) {
            animasiMasuk(
                rightColumn,
                500,
                "kanan"
            );
        }


        /* =================================================
           INSTAGRAM DAN EMAIL
        ================================================= */

        const contactItem = document.querySelector(
            ".contact-item"
        );

        if (contactItem) {
            animasiMasuk(
                contactItem,
                800,
                "bawah"
            );
        }


        /* =================================================
           FORM PESAN
        ================================================= */

        const form = document.querySelector(
            "#formPesan"
        );

        if (form) {
            animasiMasuk(
                form,
                1000,
                "bawah"
            );
        }


        /* =================================================
           FOTO CONTACT
        ================================================= */

        const fotoContact = document.querySelector(
            ".foto-contact"
        );

        if (fotoContact) {
            animasiMasuk(
                fotoContact,
                900,
                "kiri"
            );
        }

    }


    /* =================================================
       8. ANIMASI KETIKA PINDAH HALAMAN
    ================================================= */

    const semuaLink = document.querySelectorAll(
        "#menu a"
    );

    semuaLink.forEach(function (link) {

        const tujuan = link.getAttribute("href");

        if (
            tujuan &&
            !tujuan.startsWith("#") &&
            !tujuan.startsWith("http")
        ) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const halamanTujuan = tujuan;

                    document.body.animate(
                        [
                            {
                                opacity: 1,
                                transform: "translateX(0)"
                            },
                            {
                                opacity: 0,
                                transform: "translateX(-40px)"
                            }
                        ],
                        {
                            duration: 350,
                            easing: "ease-in"
                        }
                    );

                    setTimeout(function () {

                        window.location.href =
                            halamanTujuan;

                    }, 300);

                }
            );

        }

    });


    /* =================================================
       9. DROPDOWN TETAP NORMAL
       TIDAK ADA ANIMASI
    ================================================= */

    /*
       Bagian dropdown sengaja tidak diberi
       animasi JavaScript.
       
       Dropdown tetap menggunakan CSS yang
       sudah ada.
    */


    /* =================================================
       10. KONFIRMASI TOMBOL KENALAN YUK
    ================================================= */

    const tombolKenalan = document.querySelector(
        ".tombol"
    );

    if (tombolKenalan) {

        tombolKenalan.addEventListener(
            "click",
            function (event) {

                const konfirmasi = confirm(
                    "Apakah kamu ingin mengenal Astri lebih dekat?"
                );

                if (!konfirmasi) {
                    event.preventDefault();
                }

            }
        );

    }


    /* =================================================
       11. KONFIRMASI KEMBALI KE HOME
    ================================================= */

    const linkHome = document.querySelector(
        '.dropdown-content a[href="index.html"]'
    );

    if (linkHome) {

        linkHome.addEventListener(
            "click",
            function (event) {

                const konfirmasi = confirm(
                    "Apakah kamu ingin kembali ke halaman Home?"
                );

                if (!konfirmasi) {
                    event.preventDefault();
                }

            }
        );

    }


    /* =================================================
       12. FORM CONTACT
    ================================================= */

    const formPesan = document.getElementById(
        "formPesan"
    );

    if (formPesan) {

        formPesan.addEventListener(
            "submit",
            function (event) {

                const nama = document
                    .getElementById("nama")
                    .value
                    .trim();

                const email = document
                    .getElementById("emailInput")
                    .value
                    .trim();

                const pesan = document
                    .getElementById("pesan")
                    .value
                    .trim();


                if (nama === "") {

                    alert(
                        "Silakan masukkan nama kamu."
                    );

                    event.preventDefault();

                    return;
                }


                if (email === "") {

                    alert(
                        "Silakan masukkan email kamu."
                    );

                    event.preventDefault();

                    return;
                }


                if (pesan === "") {

                    alert(
                        "Silakan tulis pesan kamu terlebih dahulu."
                    );

                    event.preventDefault();

                    return;
                }


                alert(
                    "Terima kasih, " +
                    nama +
                    ". Pesan kamu sudah diisi dengan lengkap."
                );

                event.preventDefault();

            }
        );

    }


    /* =================================================
       13. PESAN CONSOLE
    ================================================= */

    let jam = new Date().getHours();

    let pesanWaktu;

    if (jam >= 5 && jam < 12) {

        pesanWaktu = "Selamat pagi!";

    } 
    else if (jam >= 12 && jam < 18) {

        pesanWaktu = "Selamat siang!";

    } 
    else {

        pesanWaktu = "Selamat malam!";

    }

    console.log(
        pesanWaktu +
        " Selamat datang di Portofolio Astri."
    );

});