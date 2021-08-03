const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to the homepage')
    }
    if(req.url === '/about'){
        res.end('Here is the about page')
    }
    res.end(
        `<h1>Oops!!!! No url found!!</h1>`
    )
})

server.listen(5000)