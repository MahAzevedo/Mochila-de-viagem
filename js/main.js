const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; //Declara um array de nome itens: //Lista vazia // JSON.parse() para parsear,interpretar,decodificar em JavaScript
/*
Parse, parsear, o que seria:
2. Parsear. Definição técnica utilizada por programadores. 
Significa extrair conteúdos de um conjunto de caracteres (geralmente separados por ponto e virgula, pipe, chave ou colchete).
Os possíveis significados são: "decodificar" ; "interpretar" e dependendo do caso "converter".
*/


itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //Cria variáveis para acessar os valores enviados:
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']


      //Transforme a variável já criada, itemAtual, em um objeto object que receba os valores de nome e quantidade, transforma estes valores em string em localStorage:
     const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    //Insire a variável itemAtual nesse array itens, utilizando o método push:
    itens.push(itemAtual)

     //transforma estes valores em string:
    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""

})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong") 
    numeroItem.innerHTML = item.quantidade
    novoItem.appendChild(numeroItem) 
    
    numeroItem.innerHTML += item.nome

    lista.appendChild(novoItem)

}