// function expression
// function anonumous

//parametros (parameters)
const sum = function (number1, number2) {
    total = number1 + number2
    return total
    // sempre que tem return em uma function, ela executa o que vem depois do return
}



let num1 = 34
let num2 = 25

console.log(`o numero 1 e ${num1}`)
console.log(`o numero 2 e ${num2}`)
console.log(`a soma e ${sum(num1, num2)}`)
// a funcao esta chamando o num1 e relacionando com o parametro number1 e o mesmo com num2 e number2 e executando a funcao


console.log(total)
// Aqui como nao foi utilizado let, var ou const, a variavel da function foi definido como escopo global, muito cuidado pois pode gerar problemas de aplicacao

function fazerSuco(fruta1, fruta2){
    return 'suco de ' + fruta1 + ' e '+ fruta2
// pode concatenar um return de uma function
}

const copo = fazerSuco ('banana', 'maca')


console.log(copo)
