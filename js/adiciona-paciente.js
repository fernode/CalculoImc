var botaoAdiciona = document.querySelector("#botao-adiciona");
var form = document.querySelector(".form-adiciona");
var tabelaPacientes = document.querySelector(".corpo-tabela");
var pacientes = document.querySelectorAll(".paciente");

botaoAdiciona.addEventListener("click", event => {
    event.preventDefault();
    var paciente = obtemDadosDoPaciente();

    var pesoValido = validaPeso(paciente.peso);
    var alturaValida = validaAltura(paciente.altura);

    var listaErros = validaPaciente(pesoValido, alturaValida);
    var elementoErros = mostraErro(listaErros);

    setTimeout(() => {
        removeErros(elementoErros);
    }, 3000);

    if (listaErros.length > 0) {
        return;
    }

    var tabela = adicionaTrNaTabela(paciente);

    form.reset();
    form.nome.focus();
});

function obtemDadosDoPaciente() {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    };
    return paciente;
}

function criaTd(classe, dado) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function criaTr(paciente) {
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

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

function validaPaciente(pesoValido, alturaValida) {
    let erros = [];
    if (!pesoValido) {
        erros.push("O peso é inválido");
    }
    if (!alturaValida) {
        erros.push("Altura invalída");
    }

    return erros;
}

function mostraErro(erros) {
    let div = document.querySelector('.lista-de-erros');
    let ulErros = document.createElement('ul');
    erros.forEach(erro => {
        var li = document.createElement('li');
        li.classList.add('peso-ou-altura-invalido');
        li.textContent = erro;
        ulErros.appendChild(li);
        div.appendChild(ulErros);
    });

    return ulErros;
}


function removeErros(listaErros) {
    let listaFilhos = listaErros;
    let filhosLista = listaErros.querySelectorAll('li');
    listaFilhos.remove(filhosLista);
}