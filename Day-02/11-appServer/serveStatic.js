var fs = require('fs'),
    path = require('path');

var staticResourceExtns = ['.html','.css','.js','.jpg','.png','.json','.txt','.xml'];

function isStatic(resource){
    var ext = path.extname(resource);
    return staticResourceExtns.indexOf(ext) !== -1;
}


module.exports = function serveStatic(req, res, next){
    if (isStatic(req.url.pathname)){
        var resource = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resource)){
            var stream = fs.createReadStream(resource);
            stream.pipe(res);
        } else{
            res.statusCode = 404;
            res.end();
        }
    } else {
        next();
    }
}
