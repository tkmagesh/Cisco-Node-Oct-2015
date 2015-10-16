var http = require('http'),
    dataParser = require('./dataParser'),
    serveStatic = require('./serveStatic'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction'),
    app = require('./app');

app.use(dataParser);
app.use(serveStatic);
app.use(calculatorProcessor);
app.use(notFoundAction);

http.createServer(app).listen(8080);
console.log('server listening on port 8080!');
