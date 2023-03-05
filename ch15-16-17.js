let courses = [];
let cor1 = prompt("Enter Course-1 Name", "Object Oriented Programming");
let cor2 = prompt("Enter Course-2 Name", "Data Structure");
let cor3 = prompt("Enter Course-3 Name", "Theory of Automata");
let cor4 = prompt("Enter Course-4 Name", "Calculus");
let cor5 = prompt("Enter Course-5 Name", "Web Engineering");


courses.push(cor1);
courses.push(cor2);
courses.push(cor3);
courses.push(cor4);
courses.push(cor5);

alert(courses);

cor1 = prompt(cor1, "Object Oriented Programming"); 
cor2 = prompt(cor2, "Data Structure");
cor3 = prompt(cor3, "Theory of Automata");
cor4 = prompt(cor4, "Calculus");
cor5 = prompt(cor5, "Web Engineering");

courses.splice(0,1, cor1);
courses.splice(1,2, cor2);
courses.splice(2,3, cor3);
courses.splice(3,4, cor4);
courses.splice(4,5, cor5);

alert(courses);