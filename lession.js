// older version:

// function add(num1,num2) {
//     num2 = num2 || 25;
//     return num1 + num2; 
// }
// const total = add(15);
// console.log(total);

// older version 2:

// function add(num1,num2) {
//     if (num2==undefined) {
//         num2 = 0;
//     }
//     return num1 + num2; 
// }
// const total = add(15);
// console.log(total);


// defaul parameter using es6
function add(num1,num2 = 20) {
    return num1 + num2; 
}
const total = add(15);
console.log(total);

// old fashion joining string

const firstName = "Mostafa";
const lastName =  "Sajid";
const fullName =  firstName + " " + lastName;
const fullName2 =  `${firstName} ${lastName} is a good boy`; // using es6
console.log(fullName);

console.log(fullName2);

// multiline es6
const multiline = `I love you
I need you when necessary
but need altime`;
console.log(multiline);


