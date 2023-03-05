let cor1 = parseFloat(prompt("Enter Course-1 Number out 100"));
let cor2 = parseFloat(prompt("Enter Course-2 Number out of 100"));
let cor3 = parseFloat(prompt("Enter Course-3 Number out of 100"));
let cor4 = parseFloat(prompt("Enter Course-4 Number out of 100"));
let cor5 = parseFloat(prompt("Enter Course-5 Number out of 100"));

let totalMarks = 500;
let obtainedMarks = cor1 + cor2 + cor3 + cor4 + cor5;
let percentage = obtainedMarks * 100/ totalMarks;
alert(`Your Percentage is ${percentage}`);

let grade = percentage;

switch(grade){
    case grade=100 || grade >=90:
        console.log("A+");
        break;
    case grade >=75 || grade <=89:
        console.log("A");
        break;
    case grade >=60 || grade <=74:
        console.log("B");
        break;
    case grade >=45 || grade <=59:
        console.log("C");
        break;
    case grade >=30 || grade <=44:
        console.log("D");
        break;
        default:
        console.log("F");

}