// /// creating a magic eight ball game w/ Natalie (instructor in class)


// // ask user for their question
// // var is out of date, the new use is let which is the same as var
// // prompt("What is your question?"); - starting code
// var question = prompt("What is your question?"); // you need to create a (variable =) in order to save the response
// // Tip from Natalie - only write as much code as you can debug/get working
// // check the line of code on 7 to see if it work
// console.log(question); //just checked by typing in "hi" and it was saved


// //check the question for a few things
// // give them an answer
// if(question === "Does he love me?") {
//     alert("NOOO")
// }
//     else {
//         alert("Maybe")
//     }
// // This code and alert did work
// if(question.includes("Does he love me?")) {
//     alert("NOOO")
// }
// else if(question.includes("Do they love me?")) { //the question was added
//         alert("Yessss")
//     }
// else {
//         alert("Maybe")
//     }
// // make sure the else, else if all start right under the "if" for it to work based on this situation




// // new part:
// var question = prompt("What is your question?");

// while(!question.includes("?")){
//     question = prompt("What's your Question");
// }
// // if(question.includes("?")) {
// // we are going to loop and keep asking the user to ask the question because we want a "?" in their question
// // ok to put ifs inside ifs
// // }
// if(question === "Money?") {
//     alert("NOOO")
// }
// else {
//     alert("Maybe")
//     }
// // This code and alert did work
// if(question.includes("Love?")) {
//     alert("NOOO")
// }
// else if(question.includes("Do they love me?")) { //the question was added
//     alert("Yessss")
// }
// else {
//     alert("Maybe")
// }
// console.log(question);
//

// class problem work
// Ask the user to pick a number to count to

var number = prompt("What number should I count up to?"); //the computer might think that this is a text and not a string. So you will need to use "parseInt"
// parseInt(number); - dont use this one
number = parseInt(number);
console.log(number);

while(number === NaN) {
    number = prompt("What number should I count up to?");
    number = parseInt(number);
 } // this is to loop if the user does not enter a number or used a text instead of a number

// count up to that number
// use for loop
for(let i = 0; i < number; i++) {
    // the code to run multiple times
    alert("looped a time")
} // for(let i = 3; i < 3; i++) { **this will not run since 3 = 3 so the code will only go from 0, 1, 2 and not stop on 3
