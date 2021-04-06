let numbers=[1,-1,5,8,10];
function findAll(previous,current){
    return previous+current;
}
let result=numbers.reduce(function(previous,current){
    return previous+current;
})

// function ask(question, yesCallbackFunction, noCallbackFunction) {
//     if (confirm(question))
//         yesCallbackFunction()
//     else 
//         noCallbackFunction();
//   }
  
//   function showOk() {
//     alert( "You answered yes" );
//   }
  
//   function showCancel() {
//     alert( "You answered no" );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);
//   ask("Do you eat fruits?", showOk, showCancel);