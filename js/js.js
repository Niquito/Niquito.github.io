$( window ).load(function() {

    $('#status').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');


    // �sto es para redimensionar la p�gina seg�n el dispositivo. No es que sea full-responsive, pero algo es algo.

        $("#Cabecera").height($(window).height());

        $(window).resize(function() {
            $('#Cabecera').height($(window).height());
        }).resize();

    // �sto es para modificar el "Buenos d�as/Buenas tardes/Buenas noches".

        fecha = new Date();
        var hora = fecha.getHours();

        if ((hora < 13) && (hora >= 6)) {

            $("#textoSaludo").text("Buenos d�as");

        } else if ((hora < 19) && (hora >= 13)) {

            $("#textoSaludo").text("Buenas tardes");

        } else {

            $("#textoSaludo").text("Buenas noches");

        }

    // �sto es del Typed.js (https://github.com/mattboldt/typed.js/  - GRAN script, recomendado +10 a favoritos y denunciado, lince)
    contadorStrings = 0;
    yaSeMostroTodo = false;
        $(function(){

            // �J�! �Cre�as que lo de "tengo 22 a�os" estaba de m�s? En realidad �se script tiene en cuenta mi fecha real de cumplea�os (todo porque me daba fiaca actualizar el c�digo)

          var edad = calcularEdad();
          if (edad == "Cumple") {

            var strEdad = "hoy es mi cumplea�os :)";

          } else {

            var strEdad = "tengo " + edad + " a�os.";

          }
                $(".element").typed({
                strings: ["soy programador.", "armo p�ginas web.","arriba pod�s ver mis trabajos.",strEdad, "nunca vi Titanic. ^1000 Ni Rocky.", "cualquier cosa, te dejo mi mail.", "estudio sistemas en la UBA.", "gracias por quedarte leyendo (:"],
                stringsElement: null,
                        // Velocidad de escritura.
                        typeSpeed: 50,
                        // Tiempo antes de que empiece la ejecuci�n.
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
                        // Callback cuando termine la funci�n
                        callback: function() {

                            MuestraYop();
                            yaSeMostroTodo = true;

                        },
                        // Callback antes de empezar la funci�n
                        preStringTyped: function() {},
                        // Callback por cada cadena escrita
                        onStringTyped: function() {
                            
                            if (!yaSeMostroTodo){

                                contadorStrings++;

                                if (contadorStrings == 3){

                                    MuestraPortfolio();

                                } else if (contadorStrings == 6){

                                    MuestraMail();

                                }


                            }

                        },
                        // Callback por volver a empezar
                        resetCallback: function() {}

              });

        });

        function MuestraPortfolio() {
             $("#divIconPortfolio").fadeIn("slow");
        }
        function MuestraMail() {
             $("#divIconMail").fadeIn("slow");
        }
        function MuestraYop() {
             $("#divIconYop").fadeIn("slow");
        }

    // �sto es para el hermoso men�

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