
let temperature = 38

//condicao so para alertar somente que esta com febre

if (temperature >= 37)
{
    console.log('febre')
} else {
    console.log ('saudavel')
}

//multiplas condicionais

if (temperature >= 37.5)
{
    console.log('febre alta')
} else if (temperature < 37.5 && temperature >=37) {
    console.log('febre moderada')
} else {
    console.log ('saudavel')
}


//transformando condicionais em variaveis

let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37

if (hightTemperature)
{
    console.log('febre alta')
} else if (mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log ('saudavel')
}