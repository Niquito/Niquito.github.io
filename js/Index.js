$(document).ready(function() {
    fecha = new Date();
    var hora = fecha.getHours();

    if ((hora < 13) && (hora >= 6)) {

    $("#textoSaludo").text("Buenos días");

    } else if ((hora < 19) && (hora >= 13)) {

    $("#textoSaludo").text("Buenas tardes");

    } else {

    $("#textoSaludo").text("Buenas noches");

    }

    $("#div1").fadeIn();

    $(".textoAnimado").typed({
    strings: ["soy programador.", "armo páginas web.", "nunca vi Titanic. ^1000 Ni Rocky.", "estudio sistemas en la UBA.", "gracias por quedarte leyendo (:"],
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
            callback: function() {},
            // Callback antes de empezar la función
            preStringTyped: function() {},
            // Callback por cada cadena escrita
            onStringTyped: function() {},
            // Callback por volver a empezar
            resetCallback: function() {}

    });

});