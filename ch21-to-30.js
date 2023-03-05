/**********************Assigment 1 ***************/

let num = parseFloat(prompt("Enter Number in Decimal Form like( 3.4 )"));
let result = Math.ceil(num);
alert(result);

let text = "This is Dummy Text";
let slicetext = text.slice(0, 4);
alert(slicetext);

function reverse(string){
    return string.split("").reverse().join(""); 
}
alert(slicetext);


/**********************Assigment 2 ***************/

// let inputValue = prompt("Write 1 Line Sentence");

// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  alert("Title Case: " + sentence.join(" "));
//  return sentence;
//  }

// titleCase(inputValue);