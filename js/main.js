const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; //Declara um array de nome itens: //Lista vazia // JSON.parse() para parsear,interpretar,decodificar em JavaScript
/*
Parse, parsear, o que seria:
2. Parsear. Definição técnica utilizada por programadores. 
Significa extrair conteúdos de um conjunto de caracteres (geralmente separados por ponto e virgula, pipe, chave ou colchete).
Os possíveis significados são: "decodificar" ; "interpretar" e dependendo do caso "converter".
*/

// Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página 
itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //Cria variáveis para acessar os valores enviados:
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    //  Const para conferir elemento nome no array itens 
    const existe = itens.find(elemento => elemento.nome === nome.value)

      //Transforme a variável já criada, itemAtual, em um objeto object que receba os valores de nome e quantidade, transforma estes valores em string em localStorage:
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        
        atualizaElemento(itemAtual)

        itens[existe.id] = itemAtual
    } else {
        itemAtual.id = itens.length

        criaElemento(itemAtual)

        //Insire a variável itemAtual nesse array itens, utilizando o método push:
        itens.push(itemAtual)
    }

    
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
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem) 
    
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item, id))

    lista.appendChild(novoItem)

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id == id), 1)

    console.log(itens)

    //escrever no localStorage
}