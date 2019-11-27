var botaoAdicionar = document.querySelector("#adicionar-paciente")


botaoAdicionar.addEventListener("click", mostraMensagem)

function mostraMensagem() {


    event.preventDefault();


    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form)
    console.log(paciente)




    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var ImcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    alturaTd.textContent = altura;
    ImcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(ImcTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}

function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}