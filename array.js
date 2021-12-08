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

