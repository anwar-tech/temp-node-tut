const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (erro, result)=>{
    if(erro){
        console.log(erro)
        return
    }

    const first = result
    readFile('./content/second.txt','utf8', (erro, result)=>{
        if(erro){
            console.log(erro)
            return
        }

        const second = result
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (erro, result)=>{
            if(erro){
                console.log(erro)
                return
            }
            console.log(result)
            console.log('done with this task')
        })
    } )

    
    
}
)

console.log('starting next task')