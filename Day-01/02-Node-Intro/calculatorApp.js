/*
create a calculator object with the following methods
- add(x,y)
- subtract(x,y)
- multiply(x,y)
- divide(x,y)

invoke the about methods with some sample numbers and print the result
*/
var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
};

var n1 = 10,
    n2 = 20;
console.log(calculator.add(n1, n2));
console.log(calculator.subtract(n1, n2));
console.log(calculator.multiply(n1, n2));
console.log(calculator.divide(n1, n2));
