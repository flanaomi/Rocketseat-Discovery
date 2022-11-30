 

let family ={
    receitas : [1000, 500, 600],
    despesas : [600, 300, 500, 900]
}

function soma (array) {
    let total = 0

    for (let valor of array){
        total += valor
    }

    return total
}

function calcularBalanco (){
    const calcularReceitas = soma (family.receitas)
    const calcularDespesas = soma (family.despesas)

    const total = calcularReceitas - calcularDespesas;



    if (total < 0) {
        console.log('saldo negativo: ' + total)
    } else if (total > 0) {
        console.log ('saldo positivo: ' + total)
    }else {
        console.log('Saldo esta zerado')
    }

}

calcularBalanco()