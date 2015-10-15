var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    calculator = require('./calculator');

var staticResourceExtns = ['.html','.css','.js','.jpg','.png','.json','.txt','.xml'];

function isStatic(resource){
    var ext = path.extname(resource);
    return staticResourceExtns.indexOf(ext) !== -1;
}


var server = http.createServer(function(req, res){
    req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    if (isStatic(req.url.pathname)){
        var resource = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resource)){
            var stream = fs.createReadStream(resource);
            stream.pipe(res);
        } else{
            res.statusCode = 404;
            res.end();
        }
    } else if (req.url.pathname === '/calculator'){
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


/*
server- listening
data parsing
static resource serving
processing req for '/calculator'
handling 'not found'
*/
