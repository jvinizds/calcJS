"use strict";

let matriz1num1, matriz1num2, matriz1num3, matriz1num4, matriz2num1, matriz2num2, matriz2num3, matriz2num4, radio1, radio2, resulnum1, resulnum2, resulnum3, resulnum4, erro, determinanteCampo

matriz1num1 = document.getElementById("matriz1num1");
matriz1num2 = document.getElementById("matriz1num2");
matriz1num3 = document.getElementById("matriz1num3");
matriz1num4 = document.getElementById("matriz1num4");
matriz2num1 = document.getElementById("matriz2num1");
matriz2num2 = document.getElementById("matriz2num2");
matriz2num3 = document.getElementById("matriz2num3");
matriz2num4 = document.getElementById("matriz2num4");
radio1 = document.getElementById("radio1");
radio2 = document.getElementById("radio2");
resulnum1 = document.getElementById("resulnum1");
resulnum2 = document.getElementById("resulnum2");
resulnum3 = document.getElementById("resulnum3");
resulnum4 = document.getElementById("resulnum4");
determinanteCampo = document.getElementById("determinante");

erro = document.getElementById("erro")

function verificaErro() {

    document.getElementById("erroDiv").style.display = "none";

    erro.innerHTML = ""

    if (matriz1num1.value == "" | matriz1num2.value == "" | matriz1num3.value == "" | matriz1num4.value == "") {
        erro.innerHTML = "Erro na matriz 1, números informados estão incorretos"
        document.getElementById("erroDiv").style.display = "block";
        document.getElementById("resulDiv").style.display = "none";
        return 0
    } else if (matriz2num1.value == "" | matriz2num2.value == "" | matriz2num3.value == "" | matriz2num4.value == "") {
        erro.innerHTML = "Erro na matriz 2, números informados estão incorretos"
        document.getElementById("erroDiv").style.display = "block";
        document.getElementById("resulDiv").style.display = "none";
        return 0
    }
    else {
        return 1
    }
}

function soma() {
    if (verificaErro() == 1) {
        resulnum1.value = parseFloat(matriz1num1.value) + parseFloat(matriz2num1.value)
        resulnum2.value = parseFloat(matriz1num2.value) + parseFloat(matriz2num2.value)
        resulnum3.value = parseFloat(matriz1num3.value) + parseFloat(matriz2num3.value)
        resulnum4.value = parseFloat(matriz1num4.value) + parseFloat(matriz2num4.value)
        document.getElementById("resulDiv").style.display = "block";
    }
}

function subtracao() {
    if (verificaErro() == 1) {
        resulnum1.value = parseFloat(matriz1num1.value) - parseFloat(matriz2num1.value)
        resulnum2.value = parseFloat(matriz1num2.value) - parseFloat(matriz2num2.value)
        resulnum3.value = parseFloat(matriz1num3.value) - parseFloat(matriz2num3.value)
        resulnum4.value = parseFloat(matriz1num4.value) - parseFloat(matriz2num4.value)
        document.getElementById("resulDiv").style.display = "block";
    }
}

function multiplicacao() {
    if (verificaErro() == 1) {
        resulnum1.value = (parseFloat(matriz1num1.value) * parseFloat(matriz2num1.value)) + (parseFloat(matriz1num2.value) * parseFloat(matriz2num3.value))
        resulnum2.value = (parseFloat(matriz1num1.value) * parseFloat(matriz2num2.value)) + (parseFloat(matriz1num2.value) * parseFloat(matriz2num4.value))
        resulnum3.value = (parseFloat(matriz1num3.value) * parseFloat(matriz2num1.value)) + (parseFloat(matriz1num4.value) * parseFloat(matriz2num3.value))
        resulnum4.value = (parseFloat(matriz1num3.value) * parseFloat(matriz2num2.value)) + (parseFloat(matriz1num4.value) * parseFloat(matriz2num4.value))
        document.getElementById("resulDiv").style.display = "block";
    }
}

function determinante() {
    if (verificaErro() == 1) {
        if (radio1.checked == true) {
            determinanteCampo.innerHTML = (parseFloat(matriz1num1.value) * parseFloat(matriz1num4.value)) - (parseFloat(matriz1num2.value) * parseFloat(matriz1num3.value))
        } else if (radio2.checked == true) {
            determinanteCampo.innerHTML = (parseFloat(matriz2num1.value) * parseFloat(matriz2num4.value)) - (parseFloat(matriz2num2.value) * parseFloat(matriz2num3.value))
        } else {
            erro.innerHTML = "Erro na escolha da matriz"
        }
    }
}

function inversa() {
    let num1, num2, num3, num4, determinante
    if (verificaErro() == 1) {
        if (radio1.checked == true) {
            determinante = (parseFloat(matriz1num1.value) * parseFloat(matriz1num4.value)) - (parseFloat(matriz1num2.value) * parseFloat(matriz1num3.value))
            if (determinante == 0) {
                erro.innerHTML = "Determinante é igual a zero, não há matriz inversa"
                document.getElementById("erroDiv").style.display = "block";
            } else {
                num1 = parseFloat(matriz1num4.value) / determinante
                num2 = (parseFloat(matriz1num2.value) / determinante) * -1
                num3 = (parseFloat(matriz1num3.value) / determinante) * -1
                num4 = parseFloat(matriz1num1.value) / determinante
                resulnum1.value = num1
                resulnum2.value = num2
                resulnum3.value = num3
                resulnum4.value = num4
                document.getElementById("resulDiv").style.display = "block";
            }
        } else if (radio2.checked == true) {
            determinante = (parseFloat(matriz2num1.value) * parseFloat(matriz2num4.value)) - (parseFloat(matriz2num2.value) * parseFloat(matriz2num3.value))
            if (determinante == 0) {
                erro.innerHTML = "Determinante é igual a zero, não há matriz inversa"
                document.getElementById("erroDiv").style.display = "block";
            } else {
                num1 = parseFloat(matriz2num4.value) / determinante
                num2 = (parseFloat(matriz2num2.value) / determinante) * -1
                num3 = (parseFloat(matriz2num3.value) / determinante) * -1
                num4 = parseFloat(matriz2num1.value) / determinante
                resulnum1.value = num1
                resulnum2.value = num2
                resulnum3.value = num3
                resulnum4.value = num4
                document.getElementById("resulDiv").style.display = "block";
            }
        } else {
            erro.innerHTML = "Erro na escolha da matriz"
        }
    }
}