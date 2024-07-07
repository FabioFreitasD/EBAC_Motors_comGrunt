$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

    $('#Telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            Telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira seu e-mail',
            Telefone: 'Por favor, insira seu telefone'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            const camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    })
});
