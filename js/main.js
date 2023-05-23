const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; //Declara um array de nome itens: //Lista vazia // JSON.parse para transformar em JavaScript

console.log(itens)
console.log([])

itens.forEach( (elemento) => {
    console.log(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //Cria variáveis para acessar os valores enviados:
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

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

    //Transforme a variável já criada, itemAtual, em um objeto object que receba os valores de nome e quantidade, transforma estes valores em string em localStorage:
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    //Insire a variável itemAtual nesse array itens, utilizando o método push:
    itens.push(itemAtual)

     //transforma estes valores em string:
    localStorage.setItem('itens', JSON.stringify(itens))
   

}