const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
//method return the system in sconds

console.log(`The System Uptime is ${os.uptime()}`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)