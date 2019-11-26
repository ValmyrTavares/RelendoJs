
//console.log(paciente)

var botaoAdicionar = document.querySelector("#adicionar-paciente")


botaoAdicionar.addEventListener("click", mostraMensagem)

function mostraMensagem() {

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    var altura = form.altura.value;

    console.log(nome);
    console.log(peso);
    console.log(gordura);
    console.log(altura);

    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var ImcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    gordura.textContent = gordura;
    alturaTd.textContent = altura;



}

var pacientes = document.querySelectorAll(".paciente")
for (var i = 0; i <= pacientes.length; i++) {

    paciente = pacientes[i];
    console.log(paciente)

    var tdNome = paciente.querySelector(".info-nome");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdGordura = paciente.querySelector(".info-gordura");
    var tdImc = paciente.querySelector(".info-imc");

    var nome = tdNome.textContent;
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var gordura = tdGordura.textContent;
    var IMC = peso / (altura * altura);

    var EhPesoValido = true;
    var EhAlturaValida = true;

    // console.log(pacientes[i])
    // console.log("São:" + pacientes.length)



    if (peso < 20 || peso > 200) {
        console.log("Peso inválido")
        EhPesoValido = false;
        paciente.classList.add("paciente-invalido")
    } else {
        console.log("Peso Valido")
    }
    if (altura < 1 || altura > 3) {
        console.log("Altura inválida")
        EhAlturaValida = false;
        paciente.classList.add("paciente-invalido")
    } else {
        console.log("Altura Válida")
    }

    if (EhPesoValido && EhAlturaValida) {
        tdImc.textContent = IMC.toFixed(2)
    } else {
        tdImc.textContent = "IMC inválido"
    }
}

