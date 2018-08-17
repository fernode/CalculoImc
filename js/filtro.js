let InputFiltro = document.querySelector("#filtro");
let paciente = document.querySelectorAll(".paciente");

InputFiltro.addEventListener("input", () => {
    let inputValue = InputFiltro.value;
    for (let i = 0; i < paciente.length; i++) {
        let tdNome = paciente[i].querySelector(".td-nome");
        let nome = tdNome.textContent;
        let exp = new RegExp(inputValue, "i");
        let trNome = tdNome.parentElement;
        if (!exp.test(nome)) {
            trNome.classList.add("invisivel");
        } else {
            for (let i = 0; i < paciente.length; i++) {
                trNome.classList.remove("invisivel");
            }
        }
    }
});