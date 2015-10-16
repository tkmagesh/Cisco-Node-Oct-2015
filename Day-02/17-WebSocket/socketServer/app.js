var nodeSocketServer = require("nodejs-websocket");

var socketServer = nodeSocketServer.createServer(function(connection){
    connection.on("text", function(msg){
        socketServer.connections.forEach(function(con){
            con.sendText(msg);
        });
    });
});
socketServer.listen(9090);
console.log("socket server listening on port 9090");
