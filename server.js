const http = require('http')

var server = http.createServer(function(req,res){
    res.end("Chal raha hai ")
})

server.listen(3000)