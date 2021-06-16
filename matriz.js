"use strict";

let erro, matriz1num1, matriz1num2, matriz1num3, matriz1num4, matriz2num1, matriz2num2, matriz2num3, matriz2num4, resulnum1, resulnum2, resulnum3, resulnum4

matriz1num1 = document.getElementById("matriz1num1");
matriz1num2 = document.getElementById("matriz1num2");
matriz1num3 = document.getElementById("matriz1num3");
matriz1num4 = document.getElementById("matriz1num4");
matriz2num1 = document.getElementById("matriz2num1");
matriz2num2 = document.getElementById("matriz2num2");
matriz2num3 = document.getElementById("matriz2num3");
matriz2num4 = document.getElementById("matriz2num4");
resulnum1 = document.getElementById("resulnum1");
resulnum2 = document.getElementById("resulnum2");
resulnum3 = document.getElementById("resulnum3");
resulnum4 = document.getElementById("resulnum4");

erro = document.getElementById("erro")

function verificaErro() {


    erro.innerHTML = ""

    if (matriz1num1 == "" | matriz1num2 == "" | matriz1num3 == "" | matriz1num4 == "") {
        erro.innerHTML += "Erro na matriz 1, números informados estão incorretos"
        console.log('Erro')
        return 0
    } else if (matriz2num1 == '' | matriz2num2 == '' | matriz2num3 == '' | matriz2num4 == '') {
        erro.innerHTML += "Erro na matriz 2, números informados estão incorretos"
        return 0
    } else {
        return 1
    }
}

function soma() {
    if (verificaErro() == 1) {
        resulnum1.value = parseFloat(matriz1num1.value) + parseFloat(matriz2num1.value)
        resulnum2.value = parseFloat(matriz1num2.value) + parseFloat(matriz2num2.value)
        resulnum3.value = parseFloat(matriz1num3.value) + parseFloat(matriz2num3.value)
        resulnum4.value = parseFloat(matriz1num4.value) + parseFloat(matriz2num4.value)
    }
}

function subtracao() {
    if (verificaErro() == 1) {
        resulnum1.value = parseFloat(matriz1num1.value) - parseFloat(matriz2num1.value)
        resulnum2.value = parseFloat(matriz1num2.value) - parseFloat(matriz2num2.value)
        resulnum3.value = parseFloat(matriz1num3.value) - parseFloat(matriz2num3.value)
        resulnum4.value = parseFloat(matriz1num4.value) - parseFloat(matriz2num4.value)
    }
}

function multiplicacao() {
    if (verificaErro() == 1) {
        resulnum1.value = (parseFloat(matriz1num1.value) * parseFloat(matriz2num1.value)) + (parseFloat(matriz1num2.value) * parseFloat(matriz2num3.value))
        resulnum2.value = (parseFloat(matriz1num1.value) * parseFloat(matriz2num2.value)) + (parseFloat(matriz1num2.value) * parseFloat(matriz2num4.value))
        resulnum3.value = (parseFloat(matriz1num3.value) * parseFloat(matriz2num1.value)) + (parseFloat(matriz1num4.value) * parseFloat(matriz2num3.value))
        resulnum4.value = (parseFloat(matriz1num3.value) * parseFloat(matriz2num2.value)) + (parseFloat(matriz1num4.value) * parseFloat(matriz2num4.value))
    }
}