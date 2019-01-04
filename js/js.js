$(function() {

    new fullpage('#fullpage', {
            //anchors: ['page1', 'page2', 'page3', 'page4'],
            //navigationTooltips: ['Inicio', 'En fácil', 'La posta', 'Quién soy'],
            css3: true,
            scrollingSpeed: 1000,
            navigation: false,
            slidesNavigation: true,
            responsiveHeight: 330,
            responsiveWidth: 1100,
            dragAndMove: true,
            dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
            controlArrows: true,
            //easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
        });

    $('#status').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');


    // Ésto es para redimensionar la página según el dispositivo. No es que sea full-responsive, pero algo es algo.
/*
        $("#Cabecera").height($(window).height());

        $(window).resize(function() {
            $('#Cabecera').height($(window).height());
        }).resize();
*/
    // Ésto es para modificar el "Buenos días/Buenas tardes/Buenas noches".

        fecha = new Date();
        var hora = fecha.getHours();

        if ((hora < 13) && (hora >= 6)) {

            $("#textoSaludo").text("Buenos días");

        } else if ((hora < 19) && (hora >= 13)) {

            $("#textoSaludo").text("Buenas tardes");

        } else {

            $("#textoSaludo").text("Buenas noches");

        }

    // Ésto es del Typed.js (https://github.com/mattboldt/typed.js/  - GRAN script, recomendado +10 a favoritos y denunciado, lince)
    contadorStrings = 0;
    yaSeMostroTodo = false;
        $(function(){

          var edad = calcularEdad();
          if (edad == "Cumple") {

            var strEdad = "hoy es mi cumpleaños :)";

          } else {

            var strEdad = "tengo " + edad + " años.";

          }
                $(".element").typed({
                strings: ["soy programador.", "armo páginas web.",strEdad, "nunca vi Titanic. ^1000 Ni Rocky.", "estudio sistemas en la UBA.", "gracias por quedarte leyendo (:"],
                stringsElement: null,
                        // Velocidad de escritura.
                        typeSpeed: 50,
                        // Tiempo antes de que empiece la ejecución.
                        startDelay: 500,
                        // Velocidad de borrado.
                        backSpeed: 25,
                        // Tiempo antes de borrar
                        backDelay: 3000,
                        // Ciclo
                        loop: true,
                        // Falso = infinito
                        loopCount: false,
                        // Mostrar cursor
                        showCursor: true,
                        // Tipo de cursos
                        cursorChar: "|",
                        // Atributos a escribir (null == texto)
                        attr: null,
                        // HTML o texto
                        contentType: 'html',
                        // Callback cuando termine la función
                        callback: function() {

                            /*MuestraYop();
                            yaSeMostroTodo = true;*/

                        },
                        // Callback antes de empezar la función
                        preStringTyped: function() {},
                        // Callback por cada cadena escrita
                        onStringTyped: function() {
                            
                            /*if (!yaSeMostroTodo){

                                contadorStrings++;

                                if (contadorStrings == 3){

                                    MuestraPortfolio();

                                } else if (contadorStrings == 6){

                                    MuestraMail();

                                }


                            }*/

                        },
                        // Callback por volver a empezar
                        resetCallback: function() {}

              });

        });

});

function calcularEdad(){

    var fechaNac = new Date("1993-08-09");
    var edad = fecha.getFullYear() - fechaNac.getFullYear();

    var diaHoy = fecha.getDate();
    var mesHoy = fecha.getMonth();

    var diaNac = fecha.getDate();
    var mesNac = fechaNac.getMonth();

    if (mesHoy <= mesNac){

        if ((diaHoy == diaNac) && (mesHoy == mesNac)){

            return("Cumple");

        } else if (diaHoy <= diaNac){

            return(--edad);

        }

    } else {

        return(edad);

    }

}