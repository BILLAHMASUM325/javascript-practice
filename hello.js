var motorBikePrice = 800;
var carPrice = 900;
var x = motorBikePrice + carPrice;
console.log(typeof x)

var nameB = "Billah Masum";
console.log(nameB);
console.log(typeof nameB)

var isHot = true;
var isRich = false;
console.log(isHot)
console.log(typeof isHot)

var homePrice = 6000;
var landPrice = 40000;
var y = homePrice + landPrice;
console.log(y)
console.log(typeof y);


var a = "This is my city";
var b = "Yes, it's mine";
var c = a+b;
console.log(c)
console.log(typeof c);

var isCold = true;
var isWarm = false;
console.log(isCold)
console.log(typeof isCold)

var promise = "I live in Khulna. This is my city.";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf("Khulna"));
console.log(promise.split(' '))

var number1 = 25;
var number2 = '15.5';
number2 = parseFloat(number2);
console.log(number2+number1);

var num1 = 35;
var num2 = 10;
num2 = parseInt(num2);
console.log(num1+num2);

var numb1 = 25;
var numb2 = 15.5;
numb1 = ' '+numb1;
console.log(typeof numb1)

var number1 = 0.1;
var number2 = 0.3;
var total = number1 + number2;
total = total.toFixed(5);
console.log(total);

var price2 = 35;
price2++;
console.log(price2);
price2--;
console.log(price2);
++price2;
console.log(price2);
--price2;
console.log(price2);

var number1 = -5;
var absoluteNumber = Math.abs(number1);
console.log(absoluteNumber);

var number = 5.4545;
var roundNumber = Math.round(number);
console.log(roundNumber);

// ceil
var number = 5.0999999;
var ceilnumber = Math.ceil(number);
console.log(ceilnumber);

// floor
var number = 5.999999;
var floorNumber = Math.floor(number);
console.log(floorNumber);