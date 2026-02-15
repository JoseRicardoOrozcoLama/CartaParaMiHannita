$(document).ready(function () {

    const musica = document.getElementById("musica");
    let abierto = false;

    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').one('click', function () {
        // ▶ solo se ejecuta UNA vez pase lo que pase
        musica.play();

        abierto = true;

        $('.envelope').css({ 
            'animation': 'fall 3s linear 1', 
            '-webkit-animation': 'fall 3s linear 1' 
        });

        $('.envelope').fadeOut(800, function () {

            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            $('#card').css({ 
                'visibility': 'visible', 
                'opacity': 0, 
                'transform': 'scale(0.1)' 
            });

            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000,
                step: function (now) {
                    let scale = 1 + Math.sin(now * Math.PI) * 0.1;
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            });

        });
    });

});
