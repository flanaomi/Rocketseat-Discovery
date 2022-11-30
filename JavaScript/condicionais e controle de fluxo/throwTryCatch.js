
//THROW
//tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

//TRY ... CATCH

//o try/catch para capturarmos esse erro, sem o try... catch, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

//O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.