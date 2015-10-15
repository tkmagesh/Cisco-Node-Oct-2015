var http = require('http'),
    url = require('url'),
    calculator = require('./calculator');

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url, true);
    if (req.url.pathname === '/calculator'){
        var data = req.url.query,
            n1 = parseInt(data.n1, 10),
            n2 = parseInt(data.n2, 10),
            operation = data.operation;
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080!');
