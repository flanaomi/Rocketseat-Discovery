const questions = [
    "Como você se chama?",
    "O que aprendi hoje?", 
    "O que me deixou aborrecido? O que poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n > ")
}

ask()

const answers = []

process.stdin.on( "data", data => {
    answers.push( data.toString().trim() )
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
    process.exit()}
}) 

process.on('exit', () =>{
    console.log( `
    Bacana ${answers[0]}!

    Hoje você apendeu:
    ${answers[1]}
    
    O que te aborreceu e o que você poderia melhorar foi:
    ${answers[2]}

    O que te deixou feliz hoje:
    ${answers[3]}

    Você ajudou ${answers[4]} pessoa(s) hoje!
    
    Volte amanhã para novas reflexões!!  
`)
})