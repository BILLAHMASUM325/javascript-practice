var nameArray = [12,3,4,5,6,3,23,4,5]
console.log(nameArray)
console.log(nameArray[0])
// update index element
nameArray[3] = 21;
console.log(nameArray)

var position = nameArray.indexOf(23)
console.log(position)

// push element in array
nameArray.push(50);
console.log(nameArray);
console.log(nameArray.length)
nameArray.pop();
console.log(nameArray);

// Element add at the beginning in array
nameArray.unshift(3000,1000);
console.log(nameArray);
// Element remove at the beginning in array
nameArray.shift();
console.log(nameArray);
// Start from specific element
var part = nameArray.slice(3);
console.log(part);

var valueArray = ['Masum','Billah','Khulna','Bangladesh','Zhenjiang', 'Jiangsu','China'];
var valueSlice = valueArray.slice(2, 5);
console.log(valueSlice);

console.log(valueArray.length)

var first = valueArray[3];
console.log(first)

var last = valueArray[valueArray.length - 1];
console.log(last)

let fruits = ['Apple', 'Banana']
// loop
fruits.forEach(function(item,index,array){
    console.log(item,index)
})

// add, push, pop item to the end of an Array
let newLength = fruits.push('Orange');
console.log(fruits)
fruits.pop();
console.log(fruits);
fruits.push('Candy','Ice-cream')
console.log(fruits);

// Remove an item from the beginning of an Array

fruits.shift();
console.log(fruits);

// Add an item to the beginning of an Array
fruits.unshift('Strawberry')
console.log(fruits);

// Find the index of an item in the Array
let x =fruits.indexOf('Ice-cream')
console.log(x);

// Remove an item by index position
let removedItem = fruits.splice(0,1)
console.log(fruits)

// Remove items from an index position
let vegetables =['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)

let pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos,n)
console.log(vegetables)
console.log(removedItems)
vegetables.slice()
console.log(vegetables)

let arr = ['This is the first element', 'This is the second element','This is the 3rd element']
console.log(arr[0])
console.log(arr[1])
console.log(arr[arr.length-1])

const fruit = []
fruit.push('banana', 'apple','peach')
console.log(fruit)
console.log(fruit.length)

