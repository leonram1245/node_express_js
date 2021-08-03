const os = require('os')

const user = os.userInfo();
console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
    totalmem:os.totalmem()
}
console.log(currentOs)