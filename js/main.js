const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    nome.value = ""
    quantidade.value = ""

})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem) 
    numeroItem.innerHTML += nome

    lista.appendChild(novoItem)

    localStorage.setItem('nome', nome)
    localStorage.setItem('quantidade', quantidade)

}