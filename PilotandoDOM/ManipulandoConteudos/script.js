// textContent

const element = document.querySelector('h1')

element.textContent += " Ola Devs!"



// innerText

element.innerText = "Meu Blog"

//innerHTML

element.innerHTML = "Ola devs! <small>!!!</small>"

//Value

const elementValue = document.querySelector ('input')

//onsole.log(elementValue.value)

elementValue.value = "Segundo valor"


//Attributes

const header = document.querySelector ('header')

//setAttribute

header.setAttribute('id', 'header')

const headerId = document.querySelector ('#header')

console.log(headerId)

//getAttribute

console.log(headerId.getAttribute('class'))

//removeAttribute

header.removeAttribute('id')
