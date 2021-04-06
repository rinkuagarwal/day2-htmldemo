let order={
    itemName:"Laptop",
    price:1200,
    pincode:123432
}
var x=document.getElementById("elements").value;
let orders=[]
for (let index = 0; index <10; index++) {
    let order={
        itemName:"Laptop"+index,
        price:1200*index,
        pincode:123432+index
    } 
    orders.push(order);
}
console.log(orders);
function displayOrders(){
    let table1='<tbody>';
    for (let i = 0; i <orders.length; i++) {
        table1+="<tr><td>"+orders[i].itemName+"</td>"
        table1+="<td>"+orders[i].price+"</td>"
        table1+="<td>"+orders[i].pincode+"</td><tr>"
    }
    table1+="</tbody>";
    document.getElementById("Table1").innerHTML=table1;
}

function sortByPrice(){
    if(orders[0].price<orders[1].price){
        orders.sort(function(order1,order2){
            return order2.price-order1.price;
        })
    }
    else{
        orders.sort(function(order1,order2){
            return order1.price-order2.price

        })
    }
    displayOrders();
}