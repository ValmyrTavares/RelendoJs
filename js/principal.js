var paciente = document.querySelector("#primeiro-paciente");
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

console.log(nome);
console.log(peso);
console.log(altura);
console.log(gordura);
console.log(IMC);

var EhPesoValido = true;
var EhAlturaValida = true;

var pacientes = document.querySelectorAll(".paciente")
for (var i = 0; i <= pacientes.length; i++) {
    console.log(pacientes[i])
}

if (peso < 20 || peso > 200) {
    console.log("Peso inválido")
    EhPesoValido = false;
} else {
    console.log("Peso Valido")
}
if (altura < 1 || altura > 3) {
    console.log("Altura inválida")
    EhAlturaValida = false;
} else {
    console.log("Altura Válida")
}

if (EhPesoValido && EhAlturaValida) {
    tdImc.textContent = IMC
} else {
    tdImc.textContent = "IMC inválido"
}