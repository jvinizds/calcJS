"use strict";
function soma() {
    var num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (num1 == 0 || num2 == 0) {
        document.getElementById("resp").value = "Não é possivel somar com zero";
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} + ${num2} =  Não é possivel somar com zero </div>`; 
    } else {
        resultado = num1 + num2;
        document.getElementById("resp").value = String(resultado);   
        document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} + ${num2} =  ${resultado} </div>`;
    }
}

function subtracao() {
    var num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    resultado = num1 - num2;
    document.getElementById("resp").value = String(resultado);  
    document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} - ${num2} =  ${resultado} </div>`;
}

function divisao() {
    var num1, num2, resultado;
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
    var num1, num2, resultado;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    resultado = num1 * num2;
    document.getElementById("resp").value = String(resultado);
    document.getElementById("hist").innerHTML += `<div class="alert alert-primary">  ${num1} * ${num2} =  ${resultado} </div>`;
}