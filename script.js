document.getElementById("calcular").addEventListener("click", function () {

    let ancho = Number(document.getElementById("ancho").value);
    let resultado = document.getElementById("resultado");

    if (ancho < 576) {

        resultado.textContent = "El tamaño es SM";

    } else if (ancho < 962) {

        resultado.textContent = "El tamaño es MD";

    } else {

        resultado.textContent = "El tamaño es XL";

    }

});