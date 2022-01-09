// function square(number){
//     return number*number;
// }
// var result = square(5);
// console.log(result);



// function message(firstName, lastName){
    
//   return firstName + lastName;
// }
// let x = message("Billah", "Jobs");
// let y = message("Bill", "Gates");
// let z = message(100,200);
// console.log(x,y,z);

function explain_callback(name, age, task){
  console.log("Hello", name);
  console.log("Your age", age);
  task();
}
function washHand(){
  console.log("wash hand with soap");
}
function takeShower(){
  console.log("take a shower");
}
function scrollFacebook(){
  console.log('Scroll facebook but dont like any post');
}
explain_callback('Sagor udddin', 17, washHand);
explain_callback('Kogir Uddin', 18, takeShower);
explain_callback('Billah', 26, scrollFacebook);


 

function evenify_all(nums){
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num % 2 ==0){
      console.log(num, ': is even number');
    }
    else{
      console.log(num*2, ': is odd number');
    }
  }
}
nums = [5, 3, 4, 5, 6, 7];
evenify_all(nums)

friend_age = [13, 17, 19, 20, 18];
evenify_all(friend_age)

my_age = [12,13,14,15,16,17];
evenify_all(my_age);


function getFullName(firstName, lastName){
  // console.log(arguments);
  let fullName = '';
  for(let i = 0; i < arguments.length; i++){
    const namePart = arguments[i];
    fullName = fullName + ' ' + namePart;
  }
  return fullName;
}

const nameN = getFullName('Md', 'Billah', 'Mohammad', 'Masum');
console.log(nameN);

