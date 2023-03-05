/*******************Assignment 2 ******************/
/*******************Factorial ******************/

let num = parseInt(prompt("Enter the number for Factorial: "));

// checking if number is negative
if (num < 0) {
   console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
}