//window.alert('Oi')
const href = window.location.href
console.log(href)
if(href === 'http://127.0.0.1:5500/o%20que%20%C3%A9%20dom/index.html') {
    console.log('É igual')
}

const h1Selecionado =   document.querySelector('h1')
const h1Classes = h1Selecionado.classList

//Node
//toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node
const titulo = document.querySelector('h1')
titulo.innerText //retorna o texto
titulo.classList //retorna as classes
titulo.id //retorna o id
titulo.offsetHeight //retorna a altura do elemento
//titulo.addEventListener('click', callback) //ativa a função callback ao click no titulo


function callbackH1() {
    console.log('Clicou em', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', callbackH1)