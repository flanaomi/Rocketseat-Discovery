//FOR

// para incrementar +1
/*
for(let i = 1; i < 10; i++){
    console.log(i)
}
*/
// para decrementar -1

/*
for(let i = 10; i > 0; i--){
    console.log(i)
}
*/


// break - ele para a execucao quando chegar na condicao

for(let i = 10; i > 0; i--){
    if(i === 5){
        break
    }
    
    console.log(i)
}


// continue - ele nao realiza a condicao e pula ela 

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue
    }
    console.log(i)
}
