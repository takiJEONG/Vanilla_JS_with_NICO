const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus:function (a, b) {
        console.log(a - b)
    },
    div:function (a, b) {
        console.log (a / b);
    },
    multi: function (a, b) {
        console.log (a * b);
    },
    power: function (a, b) {
        console.log (a ** b);
    },
};

calculator.add(5, 1);
calculator.minus(30, 6);
calculator.div(60, 5);
calculator.multi(13, 2);
calculator.power(3, 9);