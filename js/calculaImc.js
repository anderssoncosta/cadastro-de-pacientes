var titulo = document.querySelector(".titulo");
var pacientes = document.querySelectorAll(".paciente");

//Calculando IMC
for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc"); // pega a informação do valor no html

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);


    if(!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura) // calculo do IMC
        tdImc.textContent = imc; // mostra o valor do imc no html
    }

}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}
