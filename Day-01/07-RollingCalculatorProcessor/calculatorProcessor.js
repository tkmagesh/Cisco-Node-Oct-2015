var fs = require('fs'),
    calculatorFactory = require('./calculatorFactory');

var calculator = calculatorFactory();
fs.readFile('calculator.dat', {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log(err);
        return;
    }
    fileContents.split('\r\n').forEach(function(line){
        var parts = line.split(','),
            operation = parts[0],
            number = parseInt(parts[1]);
        calculator[operation](number);
    });
    console.log("Result = ", calculator.getResult());
});
