let nota = 69;

function score(nota){

let notaA = nota >= 90 && nota <= 100;
let notaB = nota >= 80 && nota <= 89;
let notaC = nota >= 70 && nota <= 79;
let notaD = nota >= 60 && nota <= 69;
let notaF = nota < 60 && nota >=0;

let notaFinal;

if (notaA) {
    notaFinal = "A"
}else if (notaB)
{
    notaFinal = "B"
}else if (notaC)
{
    notaFinal = "C"
}else if (notaD)
{
    notaFinal = "D"
}else if (notaF)
{
    notaFinal = "F"
} else {
    notaFinal = "Nota Invalida"
}

return notaFinal
}

console.log(score(100))
console.log(score(69))
console.log(score(71))
console.log(score(88))
console.log(score(-50))
console.log(score(10))

