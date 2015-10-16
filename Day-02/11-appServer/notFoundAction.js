
module.exports = function notFoundAction(req, res, next){
    res.statusCode = 404;
    res.end();
    next();
}
