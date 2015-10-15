/*Create a calculator module returning the calculator object that can be used as follows*/

var calc = require('./calculator');
calc.add(100);
calc.subtract(50);
calc.multiply(10);
calc.divide(2);
console.log(calc.getResult()); //print 250
