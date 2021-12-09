/// creating a magic eight ball game w/ Natalie (instructor in class)


// ask user for their question
// var is out of date, the new use is let which is the same as var
// prompt("What is your question?"); - starting code
var question = prompt("What is your question?"); // you need to create a (variable =) in order to save the response
// Tip from Natalie - only write as much code as you can debug/get working
// check the line of code on 7 to see if it work
console.log(question); //just checked by typing in "hi" and it was saved


//check the question for a few things
// give them an answer
if(question === "Does he love me?") {
    alert("NOOO")
}
    else {
        alert("Maybe")
    }
// This code and alert did work
if(question.includes("Does he love me?")) {
    alert("NOOO")
}
else if(question.includes("Do they love me?")) { //the question was added
        alert("Yessss")
    }
else {
        alert("Maybe")
    }
// make sure the else, else if all start right under the "if" for it to work based on this situation




// new part:
var question = prompt("What is your question?");

while(!question.includes("?")){
    question = prompt("What's your Question");
}
if(question.includes("?")) {
// we are going to loop and keep asking the user to ask the question because we want a "?" in their question
// ok to put ifs inside ifs
}
if(question === "Money?") {
    alert("NOOO")
}
else {
    alert("Maybe")
    }
// This code and alert did work
if(question.includes("Love?")) {
    alert("NOOO")
}
else if(question.includes("Do they love me?")) { //the question was added
    alert("Yessss")
}
else {
    alert("Maybe")
}
console.log(question);
//