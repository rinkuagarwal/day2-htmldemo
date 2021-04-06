let user={
    name:"Ram",
    age:10
}
let users=[];
for (let index = 0; index < 10; index++) {
    let user={
        name:"Ram"+index,
        age:10*index
    }
    users.push(user);
}
//users.reverse();
console.log(users);
// users.sort(function(user1,user2){
//     return user2.age-user1.age;
// });
// console.log(users);
// function createTable(users) {
//     let table = document.createElement("table");  //makes a table element for the page
    
//     table.insertAdjacentHTML("beforeend","<tr class='firstRow'><th>Name</th><th>Age</th><th>"); //adds the first row that contains the sections for the table

//     for (let i = 0; i < 10; i++)  //loops through the array 
//     {
//         //add info from the array into this
//         table.insertAdjacentHTML("beforeend","<tr><td>" + users[i].name+ "</td><td>");
        
//     }


// document.body.append(table);
// }

// createTable(users);
