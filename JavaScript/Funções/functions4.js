

let subject = 'create video'
let subject2 = 'criar video'




// chamando a variavel como argumento /parametro
function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject)) //alteracao da variavel realizada apenas no escopo da funcion
console.log(subject) // retorna a variavel definida antes da funcion

console.log('\n')


// sem chamar a variavel como argumento /parametro
function createThink2() {
    subject2 = 'estudar'
    return subject2
}
console.log(subject2) // retorna a variavel definida antes da function
console.log(createThink2(subject2)) // chamando a funcao con a alteracao da variaval
console.log(subject2) // por ter subescrevido a variavel na chamada anterior, ele retornou o que foi subescrito na function



