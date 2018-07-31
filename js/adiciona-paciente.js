var botaoAdiciona = document.querySelector("#botao-adiciona");
var form = document.querySelector(".form-adiciona");
var tabelaPacientes = document.querySelector(".corpo-tabela");
var pacientes = document.querySelectorAll(".paciente");

botaoAdiciona.addEventListener("click", event => {
    event.preventDefault();
    var paciente = obtemDadosDoPaciente();
    adicionaTrNaTabela(paciente);
});

function obtemDadosDoPaciente() {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

function criaTd(classe, dado) {
    let td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function criaTr(paciente) {
    let tr = document.createElement('tr');
    tr.classList.add('paciente');

    let tdNome = criaTd("td-nome", paciente.nome);
    let tdPeso = criaTd("td-peso", paciente.peso);
    let tdAltura = criaTd("td-altura", paciente.altura);
    let tdGordura = criaTd("td-gordura", paciente.gordura);
    let tdImc = criaTd("td-imc", calculaImc(paciente.peso, paciente.altura));

    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdGordura);
    tr.appendChild(tdImc);
    return tr;
}

function adicionaTrNaTabela(paciente) {
    let tr = criaTr(paciente);
    let tabela = tabelaPacientes.appendChild(tr);

    return tabela;
}