var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    var tdNome = paciente.querySelector(".td-nome");
    var nome = tdNome.textContent;
    var tdPeso = paciente.querySelector(".td-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".td-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".td-imc");
    var imc = calculaImc(peso, altura);

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        tdImc.textContent = imc;
    }
});

function validaPeso(peso) {
    if (peso < 1 || peso > 600) {
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura) {
    if (altura < 0 || altura > 3) {
        return false;
    } else {
        return true;
    }
}

function calculaImc(peso, altura) {
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}