var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
         var li = document.createElement("li");

         li.textContent = erro;
         ul.appendChild(li);

    });
    
}

//Informações do paciente. 
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//Função para montar uma tr com as informação com paciente.
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Criando Tr com os nomes das classes para cada elemento. 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Criando Td com os nomes das classes para cada elemento.
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode está em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");        
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura do paciente não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O erro do paciente não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura do paciente não pode ser em branco");
    }

    return erros;
}