
//console.log(paciente)

var pacientes = document.querySelectorAll(".paciente")
for (var i = 0; i <= pacientes.length; i++) {

    paciente = pacientes[i]

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
        paciente.style.color = "red"
    } else {
        console.log("Peso Valido")
    }
    if (altura < 1 || altura > 3) {
        console.log("Altura inválida")
        EhAlturaValida = false;
        paciente.style.color = "red";
    } else {
        console.log("Altura Válida")
    }

    if (EhPesoValido && EhAlturaValida) {
        tdImc.textContent = IMC.toFixed(2)
    } else {
        tdImc.textContent = "IMC inválido"
    }
}