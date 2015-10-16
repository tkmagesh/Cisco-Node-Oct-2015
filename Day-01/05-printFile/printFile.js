var fs = require('fs');
/*var fileContents = fs.readFileSync("sample.txt", {encoding : 'utf8'});
console.log(fileContents);*/

/*try{
    fs.readFile("sample.txt", {encoding : 'utf8'}, function(err, fileContents){
        console.log(fileContents);
    });
} catch (err){
    console.log("unexpected error - " + err.toString());
    return;
}*/

/*
fs.readFile("sample.txt", {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log("unexpected error - " + err.toString());
        return;
    }
    console.log(fileContents);
});

*/

/*Using Streams*/
var readCount = 0;
var stream = fs.createReadStream("sample1.txt", {encoding : 'utf8'});

stream.on('data', function(chunk){
    readCount++;
    console.log(chunk);
});
stream.on('end', function(){
    console.log("============== EOF ============ with readCount = ", readCount);
});

