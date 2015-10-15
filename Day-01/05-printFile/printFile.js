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

fs.readFile("sample.txt", {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log("unexpected error - " + err.toString());
        return;
    }
    console.log(fileContents);
});
