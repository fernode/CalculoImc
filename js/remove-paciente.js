let tabela = document.querySelector('.corpo-tabela');

tabela.addEventListener('dblclick', (event) => {
    let alvo = event.target.parentNode;
    alvo.classList.add("fade-out");
    setTimeout(() => {
        removePaciente(alvo);
    }, 500);
})

function removePaciente(alvo) {
    alvo.remove();
}