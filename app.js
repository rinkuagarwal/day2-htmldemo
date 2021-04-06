//objects
//var //avoid
let user = "Rinky";
console.log(user);
console.log(user.length);
let user1 = user.concat(' Agarwal');
console.log(user);
console.log(user1);

//custom objects
let a = 1;//no primitive object
console.log(a.toString());
let age = 12.2;//numbers no decimal 
console.log(age);

//json-javaScript object notation
letorder = {  //json object
    item: "Laptop",
    price: 22.7,
    address: {
        streetName: "1st main",
        city: 'delhi',
        pincode: 121231
    }
}

//arrays
let numbers = [1, 5, 4, -1, 8, 10]; //can grow in size
//----------------------------modify---------------------------
// numbers.push(34);
// console.log(numbers);
//numbers.pop();
console.log(numbers);
numbers.splice(2, 2);
console.log(numbers);



//------------------------------sorting
//numbers.sort(function(value1,value2){//callback functions
////   return value1-value2;
//});//treats all numbers as string by default
//console.log(numbers);
//---------------------------------------------------------------
// for (let index = 0; index < numbers.length; index++) {
// const element = numbers[index];
// console.log(element);   
// }
//---------------------------------------
// numbers.forEach(function(element) {
//     console.log(element);

// });
//=-----------------------------------------------
// function createOrders(){
// 
// }
//---------------using break keyword-----------------
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter the number", '');
//     if (!value) break;  //(*)
//     sum += value;
// }
// alert('Sum' + sum);
//-------------------using continue keyword-----------
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0)
        continue;
    alert(i); // 1, then 3, 5, 7, 9
}