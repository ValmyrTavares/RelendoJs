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
