function mudarCor() {
    var cor = document.querySelector(".conteiner")
    var inputNumero = document.getElementById("numeroRange");


    var numeroSelecionado = parseInt(inputNumero.value);

    if (numeroSelecionado >= 40) {
        cor.style.backgroundColor = "red";
    } else if (numeroSelecionado <= 29) {
        cor.style.backgroundColor = "skyblue";
    } else if (numeroSelecionado === 30) {
        cor.style.backgroundColor = "orange";
    } else {
        cor.style.backgroundColor = "";
    }

}
var numeroRange = document.getElementById("numeroRange");
var numeroTemp = document.getElementById("numeroTemp");
var numeroEscala = document.getElementById("numeroEscala");

numeroRange.addEventListener("input", function () {
    var value = numeroRange.value;
    numeroTemp.value = value;
});

numeroTemp.addEventListener("input", function () {
    var value = numeroTemp.value;
    numeroRange.value = value;
});




function convertTemperature(value) {
    let scale = numeroEscala.value;
    let convertedValueC, convertedValueF, convertedValueK;

    if (scale === "celsius") {
        convertedValueC = value;
        convertedValueF = (value * 9 / 5) + 32;
        convertedValueK = parseFloat(value) + 273.15;
    } else if (scale === "fahrenheit") {
        convertedValueC = (value - 32) * 5 / 9;
        convertedValueF = value;
        convertedValueK = (value - 32) * 5 / 9 + 273.15;
    } else if (scale === "kelvin") {
        convertedValueC = value - 273.15;
        convertedValueF = (value - 273.15) * 9 / 5 + 32;
        convertedValueK = value;
    }

    numeroRange.addEventListener("input", function () {
        let value = numeroRange.value;
        numeroTemp.value = value;
        convertTemperature(value);
    });

    numeroTemp.addEventListener("input", function () {
        let value = numeroTemp.value;
        numeroRange.value = value;
        convertTemperature(value);
    });

    numeroEscala.addEventListener("change", function () {
        let value = numeroTemp.value;
        convertTemperature(value);
    });

}