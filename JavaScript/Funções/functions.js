function sayMyName (name) {
    console.log('antes de executar a callback')

    name() //chamando callback

    console.log('depois de executar a callback')
}

sayMyName (
    () => {
        console.log ('estou em uma callback') //chamando a funcao name
    }
)