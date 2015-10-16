var uuid = require('node-uuid');
var sessionCookieName = 'sessionid';

var sessionStore = {

};
module.exports = function(req, res, next){
    //if no cookie
    var sessionId = req.cookies[sessionCookieName];
    if (!sessionId){
        sessionId = uuid.v1();
        res.cookie(sessionCookieName, sessionId);
        sessionStore[sessionId] = {};
    }
    req.session = sessionStore[sessionId];
    next();
}
