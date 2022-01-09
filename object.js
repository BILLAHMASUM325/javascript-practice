// var student = {id: 1, phone: 115, name:"Billah"}
// var student1 = {id: 2, phone: 116, name: "Masum"}

// console.log(student);
// console.log(student1);

// // specific element print
// var phoneNum = student.phone;
// console.log(phoneNum);

// var nameM = student1["name"];
// console.log(nameM);

// // update phone number
// student1.phone = 3456;
// console.log(student1);
//  student["name"] = 'Mohammad';
//  console.log(student)

//  function myObject(obj){
//      let arr = [];

//      for(let key in obj){
//          arr.push([key, obj[key]])
//      }
//      console.log(arr)
//  }
//  myObject({a:1, b:2})



 function keysAndValues(obj){
	let arr = []
  for(let key in obj ){
      arr.push(Object.keys(obj), Object.values(obj));
    //let a = Object.keys(obj);
   
  //let b = Object.values(obj);
//    console.log(b)
//   let c = [a, b];
  return arr;
 }
 
}
//console.log(keysAndValues({a: 1, b:2}))
//console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
//console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


function charCount(myChar, str) {
	// code here
  // capital, small letters are sensitive 
  // count myChar in str and return it
}

console.log(charCount('a', 'America')) // 1
console.log(charCount('c', 'Chamber of secrets')) // 1
console.log(charCount('b', 'big fat bubble')) // 4
