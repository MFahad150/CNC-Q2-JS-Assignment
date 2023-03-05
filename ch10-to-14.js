
/****************Simple Calculator***************/
/*****************Assignment 1 **********************/

// let num1 = parseFloat(prompt("Enter fisrt number"));
// let num2 = parseFloat(prompt("Enter second number"));
// let sign = prompt("What operation you want to apply ( either +, -, *, / or % ): ");

// let result;

// if(sign === "+"){
//    result = num1 + num2;
// }
// else if(sign == "-" ) {
//    result = num1 - num2;
// }
// else if(sign == "*" ) {
//     result = num1 * num2;
// }
// else if(sign == "/" ){
//    result = num1 / num2;
// }
// else{
//    result = num1 % num2;
// }
// alert(`${num1} ${sign} ${num2} = ${result}`);


/****************Percentage Calculator***************/
/*****************Assignment 2**********************/

let cor1 = parseFloat(prompt("Enter Course-1 Number out 100"));
let cor2 = parseFloat(prompt("Enter Course-2 Number out of 100"));
let cor3 = parseFloat(prompt("Enter Course-3 Number out of 100"));
let cor4 = parseFloat(prompt("Enter Course-4 Number out of 100"));
let cor5 = parseFloat(prompt("Enter Course-5 Number out of 100"));

let totalMarks = 500;
let obtainedMarks = cor1 + cor2 + cor3 + cor4 + cor5;
let percentage = obtainedMarks * 100/ totalMarks;
alert(`Your Percentage is ${percentage}`);