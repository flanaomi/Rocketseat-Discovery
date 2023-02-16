 const timeOut = 3000
const finished = () => console.log('função executada!')

let timer = setTimeout(finished, timeOut)
clearTimeout (timer)



/*
const time1 = 1000
const time2 = 2000
const time3 = 3000

const executar2 = () => console.log('Função executada segundo')

const executar1 = () => console.log('Função executada primeiro')

const executar3 = () => console.log('Função executada terceiro')

setTimeout(executar3, time3)
setTimeout(executar2, time2)
setTimeout(executar1, time1)

console.log("Executando funções atraves de timers")
*/

