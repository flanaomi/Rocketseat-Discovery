let string = "123"
let number = 3214
let word = "paralelepipedo"
let numero = 1243156.1654654
let frase = "Programar é muito bacana"


// TYPE COERSION
console.log('9' + 3)
// O JS ira transformar o numero 3 em string e o sinal de + estara concatenando os dados

// TYPE CONVERSION
console.log(Number('9') + 3) 
// Usamos uma formula que transforma uma string em um numero e dessa forma ele ira realizar soma ao inves de concatenar
 
/* MANIPULANDO STRING E NUMEROS */

// TRANSFORMANDO STRING EM NUMEROS E NUMEROS EM STRING

console.log(Number(string))
console.log(String(number))

// CONTAR QUANTOS CARACTERES TEM UMA PALAVRA E QUANTOS DIGITOS TEM UM NUMERO
console.log(word.length)
// usa .length
console.log(String(number).length)
//precisa trocar o tipo number para string, pois number nao recebe .length

// DEFININDO QUANTIA DE CASAS DECIMAIS

console.log(numero.toFixed(2))
// o numero entre parentes e a quantia de casas decimais para retornar

// TROCAR PONTO POR VIRGULA DE UM NUMERO

console.log(numero.toFixed(3).replace(".",","))

// apos trocar o ponto pela virgula, ele ira retornar o tipo de string, pois number nao recebe virgula, caso contrario ira retornar NaN

// TRANFORMANDO LETRA MAIUSCULA E MINUSCULA


console.log(frase.toUpperCase())
// .toUpperCase transforma todas as letras em maiusculas

console.log(frase.toLowerCase())
// .toLoweCase transforma todas as letras em minusculas

// TRANSFORMANDO CADA PALAVRA DE UMA FRASE EM UM ARRAY

let myArray = frase.split(" ")
console.log(myArray)
// .split e utilizado para separar em array, onde o valor que esta entre aspas sera consumido para se transformar em um separador dos arrays

// JUNTAR O ARRAY EM UMA STRING

let frasecomunderscore = myArray.join("_")
console.log(frasecomunderscore)
frasecomunderscore = myArray.join("")
console.log(frasecomunderscore)

 // .join e utilizado para juntar o array, e o que estiver entre aspas sera o parametro para separar as palavras

 // ENCONTRAR PALAVRA EM UMA FRASE

 console.log(frase.includes("amor"))
 console.log(frase.includes("bacana"))

 // usa-se o .includes para encontrar uma palavra especifica dentro de uma frase e ele retorna um valor boolean
 // ele e case sensitive, no caso ele difencia letras maiusculas e minusculas

 // CRIANDO UM ARRAY COM CONSTRUTOR

 let meuArray = new Array ('a','b','c')
 console.log(meuArray)
// cada argumento virara um elemento no array

// CONTANDO ELEMENTOS DE UM ARRAY
 console.log(meuArray.length)
 // da mesma forma que o .lenght usa para contar uma string, ela tambem e utilizada para contar a quantia de elementos de um array
 
 // ACESSANDO UM ELEMENTO DE UM ARRAY
console.log(meuArray[2])
//o valor dentro das colchetes serve para definir a posicao do array que quero acessar, lembrando que a posicao e 0, 1, 2 ...

// ACESSANDO UMA FUNCAO DENTRO DE UM ARRAY

console.log(
    [
        "a",
        1235787,
        function () {return "eu sou uma função dentro de um array"}
    ]
    [2]() //o numero 2 e a posicao que a funcao se encontra e os parenteses sera para executar a funcao
) 

// TRANSFORMANDO UMA CADEIA DE CARACTERES EM ELEMENTOS DE UM ARRAY

console.log(Array.from(word))

// MANIPULANDO UM ARRAY

let techs = ['html', 'css', 'js']
console.log(techs)

//adicionando um item no fim
techs.push('node.js')
console.log(techs)

//adicionando um item no comeco
techs.unshift('sql')
console.log(techs)

//Remover um item no fim
techs.pop()
console.log(techs)

//Remover um item no comeco
techs.shift()
console.log(techs)


techs.push('node.js')
techs.unshift('sql')

// pegar somente alguns elementos do array
console.log(techs.slice(2,4))
// primeiro valor e a posicao inicial (0, 1, 2...)
// segundo valor e o elemento final (1, 2, 3 ...)

// remover 1 ou mais itens em qualquer posicao
techs.splice(1,1)
console.log(techs)
// primeiro valor e a posicao
// segundo valor e a quantia de itens a serem removidos

//encontrar a posicao de um elemento no array
let index = techs.indexOf('css')
console.log(index)

// para remover um item usando index
techs.splice(index,1)
console.log(techs)