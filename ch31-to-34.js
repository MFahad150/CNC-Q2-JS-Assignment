let name = prompt("Enter Your Name: ");

let date = prompt("Enter Your Birth Date: ");
let month = prompt("Enter Your Birth Month: ");
let year = prompt("Enter Your Birth Year: ");

let today = new Date();
let hour = today.getHours();

if (hour >= 5 && hour < 12) {
  console.log("Hello " + name + ", Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Hello " + name + ", Good Afternoon!");
} else if (hour >= 18 && hour < 22) {
  console.log("Hello " + name + ", Good Evening!");
} else {
  console.log("Hello " + name + ", Good Night!");
}

console.log(`Your Date of Birth is ${date} ${month} ${year}`);

let dob = new Date(`${month}-${date}-${year}`);
let ageInMilliseconds = today - dob;


let ageInYears = Math.floor(ageInMilliseconds / 31536000000); // assuming an average year of 365.25 days
console.log("You are " + ageInYears + " years old.");

let ageInMonths = Math.floor(ageInMilliseconds / 2628000000); // assuming an average month of 30.44 days
console.log("You are " + ageInMonths + " months old.");

let ageInSeconds = Math.floor((today - dob) / 1000);

let days = Math.floor(ageInSeconds / 86400);
let hours = Math.floor((ageInSeconds % 86400) / 3600);
let minutes = Math.floor((ageInSeconds % 3600) / 60);
let seconds = ageInSeconds % 60;

console.log("You are " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds old.");


let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

if (nextBirthday < today) {
  nextBirthday = new Date(today.getFullYear() + 1, dob.getMonth(), dob.getDate());
}

let timeToBirthday = Math.floor((nextBirthday - today) / 1000);

if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
  console.log("Happy birthday," + name + "! Today is your " + calculateAge(dob) + "th birthday!");
} else {
  console.log("How much time left in your next birthday? " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
}

function calculateAge(dateOfBirth) {
  let today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  let m = today.getMonth() - dateOfBirth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age;
}
