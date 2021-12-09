// 5! = 5*4*3*2*1
// 10! = 10*9*8*7*6*5*4*3*2*1

var factorial = 1;
for(var i=1; i<=10; i++){
    factorial = factorial * i;
    console.log(i,factorial);
}

function factorial(num){
    var factorial =1;
    for(var i=1; i<=num; i++){
        factorial = factorial*i;
       
    }
    return factorial;
}
var result = factorial(5)
console.log(result)

//while loop
var i = 1;
var factorial = 1;
while(i<=5){
    factorial = factorial*i;
    console.log(i,factorial);
    i++
}

// while loop with function

function factorial(n){
    var i =1;
    var factorial = 1;
    while(i<=n){
        factorial = factorial*i;
        i++;
    }
    return factorial;
}
var result = factorial(5);
console.log(result);


