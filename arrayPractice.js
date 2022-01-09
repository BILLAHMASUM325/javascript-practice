var myName = [12,3,45,6,77,554,44];

myName[4] = 21;
let nextName = myName[4];
let position = myName.indexOf(554);

myName.push(17);
myName.push(18);


console.log(myName);
myName.push(20);
console.log(myName);

myName.pop();

myName.unshift(32);
console.log(myName)


let friendName = ['Billah', 'Masum', 'Mohammad', 'Begum', 'Bangladesh', 'India', 'Pakistan'];

// friendName.unshift('Renesa');
let part = friendName.slice(2,4)
console.log(part)
// console.log(friendName);
// friendName.pop();
// console.log(friendName);

