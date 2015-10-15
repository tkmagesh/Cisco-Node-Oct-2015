require('http').createServer(function(req, res){
    res.write('<h1>Welcome to node.js!');
    res.end();
}).listen(8080);
console.log('server listening on port 8080!');
