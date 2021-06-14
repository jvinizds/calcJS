"use strict";
function soma() {
    let num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (num1 == 0 || num2 == 0) {
        document.getElementById("resp").value = "Não é possivel somar com zero";
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} + ${num2} =  Não é possivel somar com zero </div>`;
    } else if (num1 == "" || num2 == "") {
        document.getElementById("resp").value = "Necessario informar os números";
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">Necessario informar os números</div>`;
    } else {
        resultado = num1 + num2;
        document.getElementById("resp").value = String(resultado);
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} + ${num2} =  ${resultado} </div>`;
    }
}

function subtracao() {
    let num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    resultado = num1 - num2;
    document.getElementById("resp").value = String(resultado);
    document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} - ${num2} =  ${resultado} </div>`;
}

function divisao() {
    let num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (num2 == 0) {
        document.getElementById("resp").value = "Não é possivel dividir por zero";
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} / ${num2} =  Não é possivel dividir por zero </div>`;
    } else {
        resultado = num1 / num2;
        document.getElementById("resp").value = String(resultado);
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} / ${num2} =  ${resultado} </div>`;
    }

}

function multiplicacao() {
    let num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    resultado = num1 * num2;
    document.getElementById("resp").value = String(resultado);
    document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} * ${num2} =  ${resultado} </div>`;
}

function limpar() {
    let div = document.getElementById("hist")
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("resp").value = ""
}