var middlewares = [];

function app(req, res){
    function run(middlewares){
        var first = middlewares[0],
            remaining = middlewares.slice(1),
            next = function(){
                run(remaining);
            };
        if (first){
            first(req, res, next);
        }
    }
    run(middlewares);
}

app.use = function(middleware){
    middlewares.push(middleware);
}

module.exports = app;

