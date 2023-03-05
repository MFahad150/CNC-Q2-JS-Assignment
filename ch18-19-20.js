
let courses = [];

for(let i =1 ; i<=5; i++){
    let input = prompt(`Enter Course-${i} Name:`);
    courses.push(input);
}

alert(courses);

for (let j = 0; i < courses.length; j++) {
    let course = courses[j];
    let message = `Course ${j+1}: ${course}`;
    alert(message);
  }

courses.splice(0,1, courses);
courses.splice(1,2, courses);
courses.splice(2,3, courses);
courses.splice(3,4, courses);
courses.splice(4,5, courses);

alert(courses);