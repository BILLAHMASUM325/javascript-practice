const num = ['1','2','3','4','5','6']

function myFunction(a){
    if (a[4]==a.length){
        console.log("this is me")
    }
 else{
     console.log("this is not me")
 }
}
console.log(myFunction(num));


function doubleIT(num){
    var result = num*2;
    console.log(result)
}
doubleIT(5);
doubleIT(50);
doubleIT(100);


function doubIt(num){
    var result = num*2;
    return result;
}

var first = doubIt(5);
var second = doubIt(50);
var total = first +second;
console.log(total);

// sum
function add(num1, num2){
    var result = num1+num2;
    return result;
}
var sum = add(10,10);
console.log(sum);

function jog(x, y){
    var z = x+y;
    return z;
}
var a = jog(20,5);
console.log(a)