var url = require('url'),
    qs = require('querystring');


module.exports = function dataParser(req, res, next){
    req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    req.body = {};
    req.field = function(name){
        return req.url[name] || req.body[name];
    };
    if (req.method === 'POST'){
        var data = '';
        req.on('data', function(chunk){
            data += chunk;
        });
        req.on('end', function(){
            req.body = qs.parse(data);
            next();
        });
    } else {
        next();
    }
}
