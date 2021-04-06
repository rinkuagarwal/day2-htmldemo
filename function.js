

function checkAge(age) {
    //return age>=18 ?true:confirm('Do you have permission from your parents?');
    return (age >= 18) || confirm('Do you have permission from your parents?');


}

let age = prompt('How old are you?', 18);
let decision = checkAge(age);
if (decision) {
    alert('Access granted');
} else {
    alert('Access denied');
}