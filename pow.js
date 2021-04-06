function powerCalc() {
    var x = document.getElementById("x").value;
    var n = document.getElementById("n").value;
    if(n<=0)
    {
        alert("power cant be negative")
    }
    document.getElementById("ans").innerHTML =Math.pow(x,n);
    return;
  }
  function minimum(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    document.getElementById("min").innerHTML =Math.min(a,b);
    return;
  }
//   function min(x,n){
//       if(x<n){
//           return x;
//       }return n;
//   }
//   let x=+prompt("enter number",'');
//   let n=+prompt("enter number",'');
//   if((x<0 || x=='')||(n<0||n=='')){
//       alert('Zero and null is not allowed')
//   }
//   alert(min(x,n));
