$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Menambahkan event untuk mengarahkan pengguna ke halaman galeri
    $('#valentineCard').click(function() {
        window.location.href = "galeri.html";  // Arahkan ke halaman galeri.html
    });
});
