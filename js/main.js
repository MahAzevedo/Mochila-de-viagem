const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

    evento.target.elements['nome'].value) = ""
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem) 
    numeroItem.innerHTML += nome

    lista.appendChild(novoItem)

}