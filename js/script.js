$(function() {

    var li = $("#typing li ").toArray(),
            $h2 = $("h2"),
            x = 0,
            cadena = li[0].innerHTML;
    loop();
    function loop() {
        $h2.text("");

        function remove() {
            $h2.removeClass("animation");
        }
        $h2.addClass("animation");
        cadena = li[x].innerHTML;
        $h2.text(cadena.substring(0, 56) + tamCadena(cadena));

        x++;
        if (x == 10)
            x = 0;
        
        setTimeout(remove, 10000);
        setTimeout(loop, 20000);
    }
    function tamCadena(cadena) {
        if (cadena.length > 56)
            return ".....";
        return "";
    }

});


