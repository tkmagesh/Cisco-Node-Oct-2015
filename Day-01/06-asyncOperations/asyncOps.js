/*Sync*/
function addSync(x,y){
    if (!x || !y){
        throw new Error('invalid values');
    }
    return x + y;
}

function addSyncClient(x,y){
    try{
        var result = addSync(x,y);
        console.log("result = ", result);
    } catch (e){
        console.log("something went wrong " + e);
    }
}

module.exports.addSyncClient = addSyncClient;

/*Async*/
function add(x,y, onResult){
    setTimeout(function(){
        if (!x || !y){
            var e = new Error('invalid values');
            onResult(e, null);
            return;
        }
        var result = x + y;
        onResult(null, result);
    },3000);
}

function addClient(x,y){
    add(x,y,function(e, result){
        if (e){
            console.log("something went wrong " + e);
            return;
        }
        console.log("result = ", result);
    });
}

module.exports.addClient = addClient;
