
//declarando a variavel
var clima = "Quente"; 

//Reatriuindo o valor (ele ira substituir o anterior)
clima = "Frio"; 

const clima2 = "quente" // ela nao pode mudar seu valor, se tentar retribuir um valor ele ira dar um erro

 let booleana = true;

 let numero = 1234564;

 console.log( clima2 );

console.log(typeof clima);
console.log(typeof booleana);
console.log(typeof numero);




console.log('> Existe x antes do bloco? ', resposta)

var resposta = "sim"; // variavel definida depois ela retorna como indefinida, ela precisa ser chamada depois de ser definida

console.log('> Existe x antes do bloco? ', resposta)

resposta = "nao";
//se alterar o valor da variavel depois, ela nao ira interferir aonde ela foi chamada antes da alteracao

console.log('> Existe x antes do bloco? ', resposta)

let y = 3;

{
    // console.log(y) -> //se ela for chamada antes ira dar erro
    
    let y = 1;
    console.log(y)

    //ele so atualiza para dentro do escopo
}

console.log(y) // se chamada fora do escopo ela da erro se nao for definido, porem se tiver sido definida fora do escopo, ele da o valor definido antes, pois esta fora do escopo



